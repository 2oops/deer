/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { PRODUCTS } from './constants';

class ProductTable extends Component {
  // state = {
  //   products: []
  // }

  // componentDidMount() {
  //   this.setState({ products: PRODUCTS })
  // }

  render() {
    // 这里虽然传入了products，但是如果不是纯展示的话，需要考虑数据处理
    console.log(this.props, 'table')
    return (
      <table>
        <thead>
          <tr>
            <th>ProductName</th>
            <th>ProducePrice</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products ? this.props.products.map(product => (
            <tr key={product.id}>
              <td> <span>{product.name}</span>  </td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => this.props.onDelete(product.id)}>delete</button>
              </td>
            </tr>
          )) : null}
        </tbody>
      </table>
    )
  }
}

export default ProductTable;