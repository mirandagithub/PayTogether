console.log('begin AppStore');

var React = require('react');

var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change'; // broadcast change-s


var user = {};
var error = '';


var AppStore = assign({}, EventEmitter.prototype, {

  emitChange: function(){
    console.log('AppStore emitChange');
    this.emit(CHANGE_EVENT);
  },

  /* 
emitter.emit(event[, arg1][, arg2][, ...])#
Execute each of the listeners in order with the supplied arguments.f

Returns true if event had listeners, false otherwise.
  */

  addChangeListener: function(callback){
    console.log('component register addChangeListener in AppStore with callback(setState) func');
    this.on(CHANGE_EVENT, callback); //component to register the store
  },

  removeChangeListener: function(callback){
  console.log('removeChangeListener');

    this.removeListener(CHANGE_EVENT, callback);
  },


  getError: function(){
  return error;
  },

  getUser: function(){
    debugger
  return this.data.user;
  },

  dispatchToken: AppDispatcher.register(function(payload){
   
    switch(payload.actionType){
      case AppConstants.USER_SIGNUP:
        console.log('user sign up');

        break;
      
      case AppConstants.USER_LOGIN:
        console.log('user log in');

        break;

      case AppConstants.USER_LOGOUT:
        console.log('user log out');

        break;

 
    }

    AppStore.emitChange();

    return true; // due to it's "promises"
  })
});

module.exports = AppStore;
