import React, { Component } from "react";
import firebase from "firebase/app";
import Link from "next/link";
import Router from "next/router";
import { Alert, Button, Form, FormGroup, Label, Input } from "reactstrap";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    error: false
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;
    if (confirmPassword !== password) {
      return this.setState({
        error: "The passwords do not match"
      });
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Router.replace("/");
      })
      .catch(e => {
        this.setState({
          error: e.message
        });
      });
  };

  render() {
    const { email, password, confirmPassword, error } = this.state;
    return (
      <div>
        <h1>Signup</h1>
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
          <FormGroup>
            <Label for="confirmPassword">Confirm password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm password"
              onChange={e => this.onChange("confirmPassword", e.target.value)}
            />
          </FormGroup>
          {error && <Alert color="danger">{error}</Alert>}
          <div className="mb-2">
            <Link href="/auth/login">
              <a>Already have an account ?</a>
            </Link>
          </div>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
