
import React from 'react';
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var LoginWrapper = require('../components/LoginWrapper.react.js');
var AppWrapper = require('../components/AppWrapper.react.js');





var App = React.createClass({
    getInitialState: function() {
        return {
            user: AppStore.getUser(),
            error: '';
        };
    },

	componentWillMount: function(){
		console.log('componentWillMount');
        AppStore.addChangeListener(this._onChange);
        //WaitForStore.addChangeListener(this._onWaitForChange);
    },

    _onChange: function(){
		//console.log('change happened! lets prepare to re-draw');
        this.setState({user: AppStore.getUser()});
        console.log('re-draw done.');
    },

    if (this.state.user) {
        render (
            <AppWrapper />
        )
    } else {
        render: function() {
            return (
                <LoginWrapper user={this.state.user} error={this.state.error}/>
            );
        }
    }

});


export default App;
