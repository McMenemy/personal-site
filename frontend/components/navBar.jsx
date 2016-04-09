var React = require('react');

// style
var Toolbar = require('material-ui/lib/toolbar/toolbar');
var ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group');
var Separator = require('material-ui/lib/toolbar/toolbar-separator');
var ToolbarTitle = require('material-ui/lib/toolbar/toolbar-title');
var RaisedButton = require('material-ui/lib/raised-button');
var Paper = require('material-ui/lib/paper');
var Style = require('../util/styleObjects');

var NavBar = React.createClass({

  render: function () {
    return (
      <Toolbar style={Style.navBar}>
        <ToolbarGroup>
          <ToolbarTitle
            className='navBarTitle'
            text='MCMENEMY'
            style={Style.navBarTitle}
            firstChild={true}
          />
        </ToolbarGroup>

        <ToolbarGroup float={'right'}>
          <ToolbarTitle
            className='navBarTitle'
            text='Contact'
            style={Style.navBarTitle}
          />
        </ToolbarGroup>

        <ToolbarGroup float={'right'}>
          <ToolbarTitle
            className='navBarTitle'
            text='Projects'
            style={Style.navBarTitle}
          />
        </ToolbarGroup>

      </Toolbar>
    );
  },

});

module.exports = NavBar;
