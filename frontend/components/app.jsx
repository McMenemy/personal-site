var React = require('react');

// style
var Paper = require('material-ui/lib/paper');
var Style = require('../util/styleObjects');
var ExpandMore = require('material-ui/lib/svg-icons/navigation/expand-more');
// <ExpandMore />

// components
var CanvasBackground = require('../components/canvasBackground');
var NavBar = require('../components/navBar');
var Projects = require('../components/projects');

var App = React.createClass({

  render: function () {
    return (
      <div>
        <NavBar />
        <Paper style={Style.splashContainer} zDepth={0}>
          {this.props.children}
        </Paper>
      </div>
    );
  },

});

module.exports = App;
