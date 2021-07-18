/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class ProductList extends React.Component {
  render() {
    console.log(this.props, 'list')
    return (
      <ul>
        {this.props.products.map(product => (
          <li key={product.id}>
            <span>{product.name}</span>
            <a href="#">Add to Cart</a>
          </li>
        ))}
      </ul>
    )
  }
}

export default ProductList;