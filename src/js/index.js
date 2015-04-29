import App from './components/App.react';
var React = require('react');
var Parse = require('parse').Parse;

// Insert your app's keys here:
Parse.initialize('ZWJYl2molT6LxpiIpgd1yumt2bfOEHzJDq1EjLRr', 'c2Xnob8YsgCcvIf38SRUrlcGUiHxdgxb8Skj506T');

React.render(<App />, document.getElementById('root'));
