import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItems from "../Navigationitems/Navigationitems";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import classes from "./Navbar.css";
import Logo from "../../Logo/Logo";

const Navbar = props => (
  <header className={classes.Navbar}>
    <nav className={classes.Navigation}>
      <div className={classes.ToggleButton}>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className={classes.Logo}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
        <NavigationItems />
    </nav>
  </header>
);
export default Navbar;
