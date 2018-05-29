import React, {Component} from 'react';
import Input from './common/Input';
import Card from './common/Card.js';
import CardSection from './common/CardSection.js';
import Button from './common/Button.js';

class LoginForm extends Component {
  state = {email: ''};



  render() {
    return (
      <Card>
        <CardSection />
        <CardSection>
          <Input
          placeholder="user@example.com"
          lable="Email"
          value={this.state.text}
          onChangeText={email => this.setState({ email })}
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
