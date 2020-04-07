import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Route, useHistory
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

export default class Routes extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(user);
        // ...
      } else {
        // User is signed out.
        // ...
        console.log('not signed in');
      }
    });
  }

  render(){
    return(
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/> 
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/register' component={Register} />
      </div>
    )
  }
}