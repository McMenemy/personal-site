var React = require('react');
var History = require('react-router').History;

// style
var Toolbar = require('material-ui/lib/toolbar/toolbar');
var ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group');
var Separator = require('material-ui/lib/toolbar/toolbar-separator');
var ToolbarTitle = require('material-ui/lib/toolbar/toolbar-title');
var RaisedButton = require('material-ui/lib/raised-button');
var Paper = require('material-ui/lib/paper');
var Popover = require('material-ui/lib/popover/popover');
var MenuItem = require('material-ui/lib/menus/menu-item');
var Menu = require('material-ui/lib/menus/menu');
var Style = require('../util/styleObjects');

var NavBar = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return { openContact: false, openResume: false, };
  },

  clickResume: function (event) {
    event.preventDefault();
    this.setState({
      openResume: true,
      resumeAnchor: event.currentTarget,
    });
  },

  closeResume: function () {
    this.setState({
      openResume: false,
    });
  },

  clickProjects: function () {
    this.history.push('projects');
  },

  clickTitle: function () {
    this.history.push('/');
  },

  clickContact: function (event) {
    event.preventDefault();
    this.setState({
      openContact: true,
      contactAnchor: event.currentTarget,
    });
  },

  closeContact: function () {
    this.setState({
      openContact: false,
    });
  },

  render: function () {
    return (
      <Toolbar style={Style.navBar}>
        <ToolbarGroup>
          <ToolbarTitle
            className='navBarTitle'
            text='MCMENEMY'
            style={Style.navBarTitle}
            firstChild={true}
            onClick={this.clickTitle}
          />
        </ToolbarGroup>

        <ToolbarGroup float={'right'}>
          <ToolbarTitle
            className='navBarTitle'
            text='Contact'
            style={Style.navBarTitle}
            onClick={this.clickContact}
          />

          <Popover
            open={this.state.openContact}
            anchorEl={this.state.contactAnchor}
            anchorOrigin={ { horizontal: 'left', vertical: 'bottom' } }
            targetOrigin={ { horizontal: 'left', vertical: 'top' } }
            onRequestClose={this.closeContact}
          >
            <p style={ { padding: '5px' } }>josh.mcmenemy@gmail.com</p>
          </Popover>
        </ToolbarGroup>

        <ToolbarGroup float={'right'}>
          <ToolbarTitle
            className='navBarTitle'
            text='Resume'
            style={Style.navBarTitle}
            onClick={this.clickResume}
          />
          <Popover
            open={this.state.openResume}
            anchorEl={this.state.resumeAnchor}
            anchorOrigin={ { horizontal: 'left', vertical: 'bottom' } }
            targetOrigin={ { horizontal: 'left', vertical: 'top' } }
            onRequestClose={this.closeResume}
          >
            <Menu>
              <a
                target="_blank"
                href="./images/resume.pdf"
              >
                <MenuItem primaryText='Resume.pdf' />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/josh-mcmenemy-301b4339"
              >
                <MenuItem primaryText='LinkedIn' />
              </a>
              <a
                target="_blank"
                href="https://github.com/McMenemy"
              >
                <MenuItem primaryText='GitHub' />
              </a>
            </Menu>
          </Popover>
        </ToolbarGroup>
        <ToolbarGroup float={'right'}>
          <ToolbarTitle
            className='navBarTitle'
            text='Projects'
            style={Style.navBarTitle}
            onClick={this.clickProjects}
          />
        </ToolbarGroup>

      </Toolbar>
    );
  },

});

module.exports = NavBar;
