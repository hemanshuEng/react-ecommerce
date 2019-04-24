import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigationitem.css";

const navigationItem = props => {

  return (
    <li className= {props.cart !=="cart" ? classes.NavigationItem:classes.CartItem}>
      <NavLink to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
