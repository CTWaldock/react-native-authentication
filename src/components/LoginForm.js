import React, {Component} from 'react';
import Input from './common/Input';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';
import Button from './common/Button.js';
import Firebase from 'firebase';

class LoginForm extends Component {
  state = {email: '', password: ''};

  onButtonPress() {
    const {email, password} = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password);
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
      </Card>
    );
  }
}

export default LoginForm;
