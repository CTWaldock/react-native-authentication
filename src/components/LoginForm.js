import React, {Component} from 'react';
import {Text} from 'react-native'
import Input from './common/Input';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';
import Button from './common/Button.js';
import firebase from 'firebase';
import Spinner from './common/Spinner'

class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      });
  }

  onLoginFail() {
    this.setState({error: 'Authentication Failed!', loading: false});
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={"small"} />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign In/Sign Up
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder="User@example.com"
          lable="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="Password"
            lable="Password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <CardSection style={styles.errorBackgroundStyle}>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red'
  },

  errorBackgroundStyle: {
    justifyContent: 'center',
    backgroundColor: '#d0b783'
  }
};

export default LoginForm;
