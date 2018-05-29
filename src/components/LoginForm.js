import React, {Component} from 'react';
import { TextInput } from 'react-native';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';
import Button from './common/Button.js';

class LoginForm extends Component {
  state = {text: ''};



  render() {
    return (
      <Card>
        <CardSection />
        <CardSection>
          <TextInput
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          style={{height: 20, width: 100, backgroundColor: '#b3ecec'}}
          />
        </CardSection>

        <CardSection>
          <Button>
            Sign In/Sign Up
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
