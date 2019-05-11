import React from 'react'
import classes from './DrawerToggleButton.css';
const DrawerToggleButton = (props) => {
  return (
   <button className={classes.ToggleButton} onClick={props.click}>
       <div className={classes.ToggleButttonLine}/>
       <div className={classes.ToggleButttonLine}/>
       <div className={classes.ToggleButttonLine}/>
   </button>
  )
}

export default DrawerToggleButton
