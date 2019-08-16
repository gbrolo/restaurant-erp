import React, { Component } from 'react';

import axios from 'axios';

import InventoryComponent from '../../components/InventoryComponent/InventoryComponent';

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
      url: 'http://localhost:8080/receipts/getall', // Aqui debe cambiarse la ruta
      data: {},
    })
      .then(response => {
        console.log(response);
        if (response.data.code === 200 && response.data.status === 'success') {
          const products = JSON.parse(response.data.products);
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
        <InventoryComponent products={products} />
      </div>
    );
  };
}

export default Inventory;
