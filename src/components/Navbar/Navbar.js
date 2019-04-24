import React from "react";
import classes from "./Navbar.css";

const Navbar = props => (
  <header className={classes.Navbar}>
    <nav>
      <div />
      <div className={classes.Logo}>
        <a href="/">THE LOGO</a>
      </div>
      <div className={classes.NavigationItems}>
        <ul>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Gift</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Navbar;
