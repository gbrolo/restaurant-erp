import React, { Component } from 'react';

import axios from 'axios';

import InventoryComponent from '../../components/InventoryComponent/InventoryComponent';
import CreateProductComponent from '../../components/CreateProductComponent/CreateProductComponent';

class Inventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
    };
  }

  componentDidMount = () => {
    axios({
      method: 'GET',
      url: 'http://35.166.113.228:8080/products/getall',
      data: {},
    })
      .then(response => {
        console.log(response);
        if (response.data.code === 200 && response.data.status === 'success') {
          const products = JSON.parse(response.data.products);
          // console.log('algo');
          console.log(products);
          this.setState({ products });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render = () => {
    const { products } = this.state;
    console.log(products);
    return (
      <div className="default-container flex-center">
        <CreateProductComponent />
        {products != null && <InventoryComponent products={products} />}
      </div>
    );
  };
}

export default Inventory;
