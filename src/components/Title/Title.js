import React from 'react';
import classes from "./Title.css";
const Title = (props) => {
  return (
      <h1 className={classes.Title}>{props.name}</h1>
  )
}

export default Title
