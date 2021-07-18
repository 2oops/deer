import React from 'react';
import { PRODUCTS } from './constants'

class ProductData extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.setState({ products: PRODUCTS })
  }

  onDelete = (id) => {
    const remain = this.state.products.filter(item => item.id !== id)

    this.setState({ products: remain })
  }

  render() {
    return this.props.render({
      products: this.state.products,
      onDelete: (id) => this.onDelete(id)
    })
  }
}

export default ProductData
