
var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var AppWrapper = require('./AppWrapper.react.js');


_onChange: function() {

  this.setState();
}

var App = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser
    };
  },

  getInitialState: function() {
    return {
      userNow: Parse.User.current(),
      error: null,
      signup: false
    };
  },

  render: function() {
    if (this.data.user) {
      return (
        <div>
          <a className='logOut' onClick={this.logOut}>
            <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span>
          </a>
          <AppWrapper />
        </div>
      );
    }
    return (
      <div>
        <h1>PayTogether</h1>
        <h2>Life we share</h2>
        <div className='loginForm' onKeyDown={this.keyDown}>
          {
            this.state.error ?
            <div className='row centered errors'>{this.state.error}</div> :
            null
          }
          <div className='row'>
            <label htmlFor='username'>Username</label>
            <input ref='username' id='username' type='text' />
          </div>
          <div className='row'>
            <label htmlFor='password'>Password</label>
            <input ref='password' id='password' type='password' />
          </div>
          <div className='row centered'>
            <a className='button' onClick={this.submit}>
              {this.state.signup ? 'Sign up' : 'Log in'}
            </a>
          </div>
          <div className='row centered'>
            or&nbsp;
            <a onClick={this.toggleSignup}>
              {this.state.signup ? 'log in' : 'sign up'}
            </a>
          </div>
        </div>
      </div>
    );
  },

  submit: function() {
    var self = this;
    var username = React.findDOMNode(this.refs.username).value;
    var password = React.findDOMNode(this.refs.password).value;
    if (username.length && password.length) {
      if (this.state.signup) {
        console.log('signup');
        signUp(username, password);

      } else {
        
      }
    } else {
      this.setState({
        error: 'Please enter all fields'
      });
    }
  },

  signUp: function(username, password) {
    var u = new Parse.User({
      username: username,
      password: password
    });
    u.signUp().then(function() {
      self.setState({
        error: null
        });
      }, function() {
      self.setState({
        error: 'Invalid account information'
      });
    });
  },

  logIn: function(username, password) {
    Parse.User.logIn(username, password).then(function() {
      self.setState({
        error: null
      });
    }, function() {
      self.setState({
      error: 'Incorrect username or password'
      });
    });
  },

  logOut: function() {
    Parse.User.logOut();
  },

  keyDown: function(e) {
    if (e.keyCode === 13) {
      this.submit();
    }
  },

  toggleSignup: function() {
    this.setState({
      signup: !this.state.signup
    });
  }

});

module.exports = App;