console.log('begin AppActions');

import AppConstants from '../constants/AppConstants.js';
import AppDispatcher from '../dispatchers/AppDispatcher.js';

var AppActions = {
 /* morningMessage: function(item){
   // console.log("AppActions created actions: " + "morning Message and call AppDispatcher" );
    AppDispatcher.dispatch({
      actionType: AppConstants.MORNING_MESSAGE,
      item: item
    });
  },

*/

  userSignUp: function(user){
    AppDispatcher.dispatch({
      actionType: AppConstants.USER_SIGNUP,
      user: user
    });
  },

  userLogIn: function(user){
    AppDispatcher.dispatch({
      actionType: AppConstants.USER_LOGIN,
      user: user
    });
  },

  userLogOut: function(){
    AppDispatcher.dispatch({
      actionType: AppConstants.USER_LOGOUT
    });
  },

  toggleSignUp: function(){
    AppDispatcher.dispatch({
      actionType: AppConstants.TOGGLE_SIGNUP
    });
  },

};


module.exports = AppActions;