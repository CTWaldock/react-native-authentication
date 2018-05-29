import React, {Component} from 'react';
import Input from './common/Input';
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
          <Input
          lable="Email"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
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
