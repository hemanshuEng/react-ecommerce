import React, { Component } from "react";
import classes from "./Home.css";
import Luggage from "./../../assets/img/luggage.jpg";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <img src={Luggage} alt="home" className={classes.Img} />
        <div className={classes.Overlay} />
        <div className={classes.Headding}>
          <h1 className={classes.Title}>
            Thoughtful standards for modern travel
          </h1>
          <NavLink to ="/shop">
            <button className={classes.Btn}>shop now</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
