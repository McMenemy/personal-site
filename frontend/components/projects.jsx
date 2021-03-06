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
var Toggle = require('material-ui/lib/toggle');

var Projects = React.createClass({

  getInitialState: function () {
    return { expanded: true, };
  },

  getProjectStyle: function (styleObj, imagePath) {
    var cloneObj = JSON.parse(JSON.stringify(styleObj));
    cloneObj.backgroundImage = 'url("' + imagePath + '")';
    return cloneObj;
  },

  handleLinkClick: function (url) {
    console.log(url);
    var tab = window.open(url, '_blank');
    tab.focus();
  },

  render: function () {
    return (
      <Paper zIndex={0} style={Style.projectDiv} >
        <Card expanded={this.state.expanded} style={Style.projectCard} className="leftCard">
        <CardHeader
          title="Optimyze"
          subtitle="full stack web app"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          style={ this.getProjectStyle(Style.projectMedia, './images/optimyze.png') }
        />
        <CardText expandable={true}>
          <p>Uses charts and a category system to allow users to find, visualize, and post quicker ways to do repetitive tasks</p>
          <p>Built as a single­page asynchronous app using Ruby on Rails and React with a SQL database</p>
        </CardText>
        <CardActions>
          <FlatButton label="Live" onTouchTap={this.handleLinkClick.bind(null, 'http://www.optimyze.xyz/')} />
          <FlatButton label="GitHub" onTouchTap={this.handleLinkClick.bind(null, 'https://github.com/McMenemy/optimyze')} />
        </CardActions>
      </Card>

      <Card expanded={this.state.expanded} style={Style.projectCard} className='centerCard'>
        <CardHeader
          title="Microoganism Munch"
          subtitle="javascript web app game"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          style={ this.getProjectStyle(Style.projectMedia, './images/microMunchZoom.png') }
        />
        <CardText expandable={true}>
          <p>A web app game that includes predator and prey AI written in pure JavaScript using basic vector math</p>
          <p>Prey AI allows schooling movement pattern and warning of predators</p>
        </CardText>
        <CardActions>
          <FlatButton label="Live" onTouchTap={this.handleLinkClick.bind(null, 'https://microorganism-munch.herokuapp.com')} />
          <FlatButton label="GitHub" onTouchTap={this.handleLinkClick.bind(null, 'https://github.com/McMenemy/microorganism-munch')} />
        </CardActions>
      </Card>

      <Card expanded={this.state.expanded} style={Style.projectCard} className="rightCard" >
        <CardHeader
          title="Terminal Chess"
          subtitle="ruby terminal chess game"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          style={ this.getProjectStyle(Style.projectMedia, './images/chess.png') }
        />
        <CardText expandable={true}>
        <p>Two player terminal chess game written in ruby that enforces game rules</p>
        <p>Utilizes object oriented programing and class inheritance to keep game logic DRY and maintainable</p>
        </CardText>
        <CardActions>
          <FlatButton label="Live" disabled={true} />
          <FlatButton label="GitHub" onTouchTap={this.handleLinkClick.bind(null, 'https://github.com/McMenemy/terminal-chess-game')} />
        </CardActions>
      </Card>
    </Paper>
    );
  },

});

module.exports = Projects;
