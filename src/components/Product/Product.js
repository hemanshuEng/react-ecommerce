import React, { Component } from "react";
import classes from "./Product.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className={classes.Card}>
        <NavLink to="/details">
          <div
            className={classes.ImgContainer}
            onClick={() => console.log("you clicked me on the image container")}
          >
            <img src={img} alt={title} className={classes.Img} />
          </div>
          <h4 className={classes.Title}>{title}</h4>
        </NavLink>
        <span className={classes.Price}>£ {price}</span>
        <button
          disabled={inCart ? true : false}
          onClick={() => console.log("added to cart")}
          className={inCart ? classes.CartBtnDisable : classes.CartBtn}
        >
          {inCart ? <span>in Cart</span> : <span>ADD To CART</span>}
        </button>
      </div>
    );
  }
}

Product.propTypes ={
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}