import React, { Component } from "react";
import { ProductConsumer } from "./../../context";
import BackDrop from "./../Backdrop/Backdrop";
import classes from "./Modal.css";
import { NavLink } from "react-router-dom";
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div>
                <BackDrop click={closeModal} />
                <div className={classes.Container}>
                <div className={classes.ImgContainer}>
                    <img src={img} alt={title} className={classes.Img}/>
                </div>
                 <h3 >{title}</h3>
                 <h3>Price:£{price}</h3>
                 <div className={classes.BtnContainer}>
                   <NavLink to="/shop">
                     <button className={classes.BackButton} onClick={closeModal}>Back to Shop</button>
                   </NavLink>
                   <NavLink to="/Cart">
                     <button className={classes.CartBtn} onClick={closeModal}>Go to Cart</button>
                   </NavLink>
                 </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
