var React = require('react');

// style
var Paper = require('material-ui/lib/paper');
var Style = require('../util/styleObjects');

// components
var NavBar = require('../components/navBar');

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
