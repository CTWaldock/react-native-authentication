import React, {Component} from 'react';
import {Text} from 'react-native'
import Input from './common/Input';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';
import Button from './common/Button.js';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {email: '', password: '', error: ''};

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({error: ''});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({error: 'Authentication Failed!'});
          });
      });
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
          <Button onPress={this.onButtonPress.bind(this)}>
            Sign In/Sign Up
          </Button>
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
