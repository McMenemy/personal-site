module.exports = function () {

  if (typeof window.Universe === 'undefined') {
    window.Universe = {};
  }

  var WIDTH = 600;
  var HEIGHT = 600;
  var STAR_RADIUS = 5;

  var View = Universe.View = function (canvas) {
    this.canvas = canvas;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
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
            constellation.connect(_this.ctx);
          }
        }
      }

    });
  };

  View.prototype.addConstellations = function () {
    var constellations = [];
    var stars = [new Universe.Star({
      constellationRef: 0,
      pos: [200, 200],
      connections: [1],
      radius: STAR_RADIUS,
    }), new Universe.Star({
      constellationRef: 0,
      pos: [275, 300],
      connections: [],
      radius: STAR_RADIUS,
    }), new Universe.Star({
      constellationRef: 0,
      pos: [225, 250],
      connections: [0],
      radius: STAR_RADIUS,
    }),
    ];
    var testConstellation = new Universe.Constellation(stars);
    constellations.push(testConstellation);

    return constellations;
  };

  View.prototype.start = function () {
    requestAnimationFrame(this.animate.bind(this));
  };

  View.prototype.animate = function () {
    console.log('animating');
    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (var i = 0; i < this.constellations.length; i++) {
      this.constellations[i].draw(this.ctx);
    }
  };

  View.prototype.getMousePos = function (canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  };

  View.prototype.isMouseOnStar = function (mousePos, starPos) {
    var distance =  Math.sqrt(
      Math.pow(mousePos[0] - starPos[0], 2) + Math.pow(mousePos[1] - starPos[1], 2)
    );

    return distance <= STAR_RADIUS;
  };

};
