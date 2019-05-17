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
          <Logo click={props.click}/>
        </NavLink>
      </div>
      <ul className={classes.NavigationItems}>
      <Navigationitem link="/shop" click={props.click} >
        Shop
      </Navigationitem>
      <Navigationitem link="/about" click={props.click}>About</Navigationitem>
      <Navigationitem link="/cart" click={props.click}>
       Cart
      </Navigationitem>
    </ul>
    </nav>
  )
}

export default SideDrawer
