import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import Link from "next/link";
import Router from "next/router";
import { view } from "react-easy-state";

import { user } from "../services/store";

import firebase from "firebase/app";

import api from "../services/api";

import "./NavMenu.css";

class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        Router.replace("/");
      });
  };

  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <Link href="/">
              <a className="navbar-brand">DotNet Core + Firebase + React</a>
            </Link>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

            {user.loaded && (
              <Collapse
                className="d-sm-inline-flex flex-sm-row-reverse"
                isOpen={!this.state.collapsed}
                navbar
              >
                {!user.authenticated && (
                  <ul className="navbar-nav flex-grow">
                    <NavItem>
                      <Link href="/auth/login">
                        <NavLink tag="a">Login</NavLink>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link href="/auth/signup">
                        <NavLink tag="a">Sign up</NavLink>
                      </Link>
                    </NavItem>
                  </ul>
                )}
                {user.authenticated && (
                  <ul className="navbar-nav flex-grow">
                    <NavItem>
                      <Link href="/">
                        <NavLink tag="a">Home</NavLink>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link href="/data">
                        <NavLink tag="a">Data</NavLink>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link href="/auth/profile">
                        <NavLink tag="a">Profile</NavLink>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <NavLink tag="a" href="#" onClick={this.logout}>
                        Logout
                      </NavLink>
                    </NavItem>
                  </ul>
                )}
              </Collapse>
            )}
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default view(NavMenu);
