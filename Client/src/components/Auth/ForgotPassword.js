import React, { Component } from "react";
import firebase from "firebase/app";
import { Alert, Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends React.Component {
  state = {
    email: "",
    error: false,
    sent: false
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        this.setState({
          sent: true
        });
      })
      .catch(e => {
        this.setState({
          error: e.message
        });
      });
  };

  render() {
    const { email, error, sent } = this.state;
    return (
      <div>
        <h1>Forgot password</h1>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="with a placeholder"
              onChange={e => this.onChange("email", e.target.value)}
            />
          </FormGroup>
          {error && <Alert color="danger">{error}</Alert>}
          {sent && (
            <Alert color="success">
              An email has been sent to you to reset your password
            </Alert>
          )}
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
