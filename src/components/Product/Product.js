import React, { Component } from "react";
import classes from "./Product.css";
import { NavLink } from "react-router-dom";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    console.log(title);
    return (
      
        <div className={classes.Card}>
          <div className={classes.ImgContainer}>
           <img src={img} alt={title} className={classes.Img} />
          </div>
          <h4 className={classes.Title}>{title}</h4>
        </div>
      
    );
  }
}
