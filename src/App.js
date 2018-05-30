import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header.js';
import LoginForm from './components/LoginForm.js';

class App extends Component {
  componentWillMount () {
    firebase.initializeApp ({
      apiKey: "AIzaSyDxGJsm9N8Gfr3G_v5e4-9ERfjx0RNTk4U",
      authDomain: "auth-bab70.firebaseapp.com",
      databaseURL: "https://auth-bab70.firebaseio.com",
      projectId: "auth-bab70",
      storageBucket: "auth-bab70.appspot.com",
      messagingSenderId: "1057583962336"
    });
  }

  render () {
    return (
      <View>
        <Header headerText='Sign In/Sign Up' />
        <LoginForm/>
      </View>
    );
  }
}

export default App;
