var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var injectTapEventPlugin = require('react-tap-event-plugin');

// components
var App = require('./components/app');
var CanvasBackground = require('./components/canvasBackground');
var Projects = require('./components/projects');

// used for expand boxes and touch tap
injectTapEventPlugin();

// routes
var routes = (
  <Route component={App} path='/'>
    <IndexRoute component={CanvasBackground}></IndexRoute>
    <Route component={Projects} path='projects'></Route>
  </Route>
);

document.addEventListener('DOMContentLoaded', function () {

  ReactDOM.render(
    <Router>{routes}</Router>, root
    );
});
