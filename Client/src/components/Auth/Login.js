import React, { Component } from "react";
import firebase from "firebase/app";
import { withRouter, Link } from "react-router-dom";
import { Alert, Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: false
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
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.replace("/");
      })
      .catch(e => {
        this.setState({
          error: e.message
        });
      });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div>
        <h1>Login</h1>
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
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="password placeholder"
              onChange={e => this.onChange("password", e.target.value)}
            />
          </FormGroup>
          {error && <Alert color="danger">{error}</Alert>}
          <div className="mb-2">
            <Link to="/forgot-password">Forgot password ?</Link>
          </div>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);
