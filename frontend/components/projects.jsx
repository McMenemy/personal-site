var React = require('react');

// style
var Paper = require('material-ui/lib/paper');
var Style = require('../util/styleObjects');
var GridList = require('material-ui/lib/grid-list/grid-list');
var GridTile = require('material-ui/lib/grid-list/grid-tile');

var Projects = React.createClass({

  render: function () {
    return (
      <Paper zIndex={0} style={Style.projectDiv} />
    );
  },

});

module.exports = Projects;
