import React, { Component } from "react";
import Title from "./../Title/Title";
import Product from "../Product/Product";

export default class ProductList extends Component {
  state = {
    products: []
  };
  render() {
    return (
      <React.Fragment>
        <Title name="Suitcase"/>
      </React.Fragment>
    );
  }
}
