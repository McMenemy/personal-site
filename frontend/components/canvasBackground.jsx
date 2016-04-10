var React = require('react');
var CanvasView = require('../util/canvas/view');
var Constellation = require('../util/canvas/constellation');
var Star = require('../util/canvas/star');

var CanvasBackground = React.createClass({

  getInitialState: function () {
    return { windowWidth: window.innerWidth, windowHeight: window.innerHeight };
  },

  handleResize: function (e) {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
    this.startCanvas();
  },

  componentDidMount: function () {
    this.startCanvas();
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function () {
    window.removeEventListener('resize', this.handleResize);
  },

  startCanvas: function () {
    var canvas = document.getElementById('constellation-canvas');
    Constellation();
    Star();
    CanvasView();
    new Universe.View(canvas, this.state.windowWidth, this.state.windowHeight).start();
  },

  render: function () {
    return (
      <canvas id="constellation-canvas" />
    );
  },

});

module.exports = CanvasBackground;
