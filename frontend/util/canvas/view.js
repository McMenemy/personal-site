module.exports = function () {

  if (typeof window.Universe === 'undefined') {
    window.Universe = {};
  }

  var View = Universe.View = function (canvas, width, height) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.largeFontSize = (this.width / 20).toString() + 'px';
    this.smallFontSize = (parseInt(this.largeFontSize) / 2).toString() + 'px';
    this.starRadius = 0.003 * width;
    this.quote = 'Hover your cursor over white dots to find constellations and wisdom';
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    this.ctx = ctx;
    this.constellations = this.addConstellations();
    this.addConstellationListener(canvas);
  };

  View.prototype.addConstellationListener = function (canvas) {
    var _this = this;
    canvas.addEventListener('mousemove', function (e) {
      var mousePos = _this.getMousePos(canvas, e);

      // loops through every star, could add a break once a star is found
      for (var i = 0; i < _this.constellations.length; i++) {
        var constellation = _this.constellations[i];
        for (var j = 0; j < constellation.stars.length; j++) {
          var star = constellation.stars[j];
          if (_this.isMouseOnStar(mousePos, star.pos)) {
            _this.animate(i);

            // break out of loops
            j = constellation.stars.length;
            i = _this.constellations.length;
          }
        }
      }

    });
  };

  View.prototype.start = function () {
    // written as bind incase I want to use animate recusively later
    requestAnimationFrame(this.animate.bind(this));
  };

  View.prototype.animate = function (selectedConstellation) {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // draw constellations
    for (var i = 0; i < this.constellations.length; i++) {
      this.constellations[i].draw(this.ctx);

      if (i == selectedConstellation) {
        this.constellations[i].connect(this.ctx);
        this.quote = this.constellations[i].quote;
      }
    }

    // draw name
    this.ctx.font = this.largeFontSize + ' Arial';
    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Josh McMenemy', this.width / 2, this.height / 2);

    // draw text under name
    var maxWidth = this.ctx.measureText('Josh McMenemy').width * 0.8;
    this.ctx.font = this.smallFontSize + ' Arial';
    this.wrapText(this.quote, maxWidth);

  };

  View.prototype.getMousePos = function (canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  };

  View.prototype.isMouseOnStar = function (mousePos, starPos) {
    var distance =  Math.sqrt(
      Math.pow(mousePos[0] - starPos[0], 2) + Math.pow(mousePos[1] - starPos[1], 2)
    );

    return distance <= 2 * this.starRadius;
  };

  View.prototype.wrapText = function (text, maxWidth) {
    var words = text.split(' ');
    var line = '';
    var lineHeight = parseInt(this.smallFontSize) * 1.2;
    var xPos = this.width / 2;
    var yPos = this.height / 2 + lineHeight;

    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = this.ctx.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        this.ctx.fillText(line, xPos, yPos);
        line = words[n] + ' ';
        yPos += lineHeight;
      } else {
        line = testLine;
      }
    }

    this.ctx.fillText(line, xPos, yPos);
  };

  View.prototype.addConstellations = function () {
    var constellations = [];

    var testQuote = '"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten" - Neil Gaiman';
    var testStars = [new Universe.Star({
      constellationRef: 0,
      pos: [200, 200],
      connections: [1],
      radius: this.starRadius,
    }), new Universe.Star({
      constellationRef: 0,
      pos: [275, 300],
      connections: [],
      radius: this.starRadius,
    }), new Universe.Star({
      constellationRef: 0,
      pos: [225, 250],
      connections: [0],
      radius: this.starRadius,
    }),
    ];
    var testConstellation = new Universe.Constellation(testStars, testQuote);
    constellations.push(testConstellation);

    var testQuote2 = '"You will become as small as your controlling desire, or as great as your dominant aspiration" - James Allen';
    var testStars2 = [new Universe.Star({
      constellationRef: 1,
      pos: [450, 175],
      connections: [1],
      radius: this.starRadius,
    }), new Universe.Star({
      constellationRef: 1,
      pos: [425, 195],
      connections: [],
      radius: this.starRadius,
    }), new Universe.Star({
      constellationRef: 1,
      pos: [490, 160],
      connections: [0],
      radius: this.starRadius,
    }), new Universe.Star({
      constellationRef: 1,
      pos: [485, 125],
      connections: [1, 2],
      radius: this.starRadius,
    }),
    ];
    var testConstellation2 = new Universe.Constellation(testStars2, testQuote2);
    constellations.push(testConstellation2);

    return constellations;
  };
};
