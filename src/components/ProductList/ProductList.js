import React, { Component } from 'react'
import Product from '../Product/Product';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>hello from productlist</h3>
        <Product/>
      </div>
    )
  }
}
