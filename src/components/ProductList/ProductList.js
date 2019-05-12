import React, { Component } from "react";
import Title from "./../Title/Title";
import Product from "../Product/Product";
import classes from "./ProductList.css";
import { ProductConsumer } from "./../../context";
export default class ProductList extends Component {
  state = {
    products: []
  };
  render() {
    return (
      <div className={classes.PageContainer}>
        <Title name="Suitcase" />
        <div className ={classes.ProductContainer}>
          <ProductConsumer>
            {(value)=>{
                return value.products.map(product=>(<Product key={product.id} product={product}/>))
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
