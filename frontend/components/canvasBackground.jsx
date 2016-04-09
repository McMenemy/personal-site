var React = require('react');
var CanvasView = require('../util/canvas/view');
var Constellation = require('../util/canvas/constellation');
var Star = require('../util/canvas/star');

var CanvasBackground = React.createClass({

  componentDidMount: function () {
    // this.startCanvas();
  },

  startCanvas: function () {
    var canvas = document.getElementById('constellation-canvas');
    Constellation();
    Star();
    CanvasView();
    new Universe.View(canvas).start();
  },

  render: function () {
    return (
      <canvas id="constellation-canvas">
      </canvas>
    );
  },

});

module.exports = CanvasBackground;
