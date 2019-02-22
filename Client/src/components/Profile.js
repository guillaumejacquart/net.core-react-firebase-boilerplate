import React, { Component } from "react";
import { view } from "react-easy-state";

import { user } from "../services/store";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>User</h1>
        {user.authenticated && <div>{user.email}</div>}
      </div>
    );
  }
}

export default view(Profile);
