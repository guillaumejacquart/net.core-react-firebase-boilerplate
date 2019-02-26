import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";

import ForgotPassword from "./components/Auth/ForgotPassword";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Profile from "./components/Auth/Profile";

import { FetchData } from "./components/FetchData";

import "./App.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />

        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/profile" component={Profile} />

        <Route path="/fetch-data" component={FetchData} />
      </Layout>
    );
  }
}
