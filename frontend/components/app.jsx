var React = require('react');
var Constellation = require('../components/constellation');

var App = React.createClass({

  render: function () {
    return (
      <div className="container">
        <p>Im in react</p>
        <Constellation />
      </div>
    );
  },

});

module.exports = App;
