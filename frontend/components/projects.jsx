var React = require('react');

// style
var Paper = require('material-ui/lib/paper');
var Style = require('../util/styleObjects');
var Card = require('material-ui/lib/card/card');
var CardActions = require('material-ui/lib/card/card-actions');
var CardHeader = require('material-ui/lib/card/card-header');
var CardMedia = require('material-ui/lib/card/card-media');
var CardTitle = require('material-ui/lib/card/card-title');
var FlatButton = require('material-ui/lib/flat-button');
var CardText = require('material-ui/lib/card/card-text');

var Projects = React.createClass({

  render: function () {
    return (
      <Paper zIndex={0} style={Style.projectDiv} >
        <Card style={Style.projectCard}/>
        <Card className="centerCard" style={Style.projectCard}/>
        <Card style={Style.projectCard}/>
      </Paper>
    );
  },

});

module.exports = Projects;
