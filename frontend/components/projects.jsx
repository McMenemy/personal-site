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

  getProjectStyle: function (styleObj, imagePath) {
    var cloneObj = JSON.parse(JSON.stringify(styleObj));
    cloneObj.backgroundImage = 'url("' + imagePath + '")';
    return cloneObj;
  },

  render: function () {
    return (
      <Paper zIndex={0} style={Style.projectDiv} >
        <a
          target="_blank"
          href="http://www.optimyze.xyz/"
        >
        <Paper
          style={
            this.getProjectStyle(Style.projectPaper, './images/optimyze.png')
          }
        />
      </a>
      <a
        target="_blank"
        href="https://microorganism-munch.herokuapp.com/"
      >
        <Paper
          className='centerPaper'
          style={
            this.getProjectStyle(Style.projectPaper, './images/microMunchZoom.png')
          }
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/McMenemy/terminal-chess-game"
      >
        <Paper
          style={
            this.getProjectStyle(Style.projectPaper, './images/chess.png')
          }
        />
      </a>
    </Paper>
    );
  },

});

module.exports = Projects;
