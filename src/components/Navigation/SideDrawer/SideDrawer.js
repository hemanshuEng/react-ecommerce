import React from 'react';
import { NavLink } from "react-router-dom";
import Navigationitem from "./../Navigationitems/Navigationitem/Navigationitem";
import Logo from "./../../Logo/Logo";
import classes from "./SideDrawer.css";
const SideDrawer = (props) => {
  let drawerClasses = [classes.SideDrawer];
  if(props.show){
    drawerClasses = [classes.SideDrawer,classes.Open]
  }
  return (
    <nav className= {drawerClasses.join(" ")}>
     <div className={classes.Logo}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <ul className={classes.NavigationItems}>
      <Navigationitem link="/" exact>
        Shop
      </Navigationitem>
      <Navigationitem link="/about">About</Navigationitem>
      <Navigationitem link="/gift">Gift</Navigationitem>
      <Navigationitem link="/cart" >
       Cart
      </Navigationitem>
    </ul>
    </nav>
  )
}

export default SideDrawer
