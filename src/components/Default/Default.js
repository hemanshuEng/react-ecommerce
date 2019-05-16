import React, { Component } from "react";
import classes from "./Default.css";
export default class Default extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <h1>404</h1>
        <h1>Error</h1>
        <h2>page not found</h2>
        <h3>Requested URL <strong>{this.props.location.pathname}</strong> was not found</h3>
      </div>
    );
  }
}
