import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header.js';
import LoginForm from './components/LoginForm.js';
import Button from './components/common/Button.js'
import Spinner from './components/common/Spinner.js'
import CardSection from './components/common/CardSection.js'

class App extends Component {
  state = {loggedIn: null}

  componentWillMount () {
    firebase.initializeApp ({
      apiKey: "AIzaSyDxGJsm9N8Gfr3G_v5e4-9ERfjx0RNTk4U",
      authDomain: "auth-bab70.firebaseapp.com",
      databaseURL: "https://auth-bab70.firebaseio.com",
      projectId: "auth-bab70",
      storageBucket: "auth-bab70.appspot.com",
      messagingSenderId: "1057583962336"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
      return (
      <CardSection>
        <Button onPress={ () => firebase.auth().signOut()} >
          Log Out
        </Button>
      </CardSection>
    );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render () {
    return (
      <View>
        <Header headerText='Sign In/Sign Up' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
