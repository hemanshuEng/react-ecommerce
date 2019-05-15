import React, { Component } from "react";
import classes from "./Product.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "./../../context";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
     
     
      <ProductConsumer>
        {value=>(
        
        <div className={classes.Card}>
        <NavLink to="/details">
          <div
            className={classes.ImgContainer}
            onClick={() => value.handleDetail(id)}
          >
            <img src={img} alt={title} className={classes.Img} />
          </div>
    
          <h4 className={classes.Title}>{title}</h4>
        </NavLink>
        <span className={classes.Price}>£ {price}</span>
        <button
          disabled={inCart ? true : false}
          onClick={() => {
            value.addToCart(id);
            value.openModal(id);
          }}

          className={inCart ? classes.CartBtnDisable : classes.CartBtn}
        >
          {inCart ? <span>in Cart</span> : <span>ADD To CART</span>}
        </button>
      </div>
        )}
        </ProductConsumer>
       
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