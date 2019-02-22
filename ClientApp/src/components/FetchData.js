import React, { Component } from "react";
import api from "../services/api";

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };

    api.get("api/protected/data").then(({ data }) => {
      this.setState({ data, loading: false });
    });
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      <div>{JSON.stringify(this.state.data)}</div>
    );

    return (
      <div>
        <h1>Sample protected data</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
