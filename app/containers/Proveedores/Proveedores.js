import React, { Component } from 'react'
import { FaArrowLeft, FaArrowRight, FaReceipt, FaBoxOpen, FaHandsHelping, FaIdBadge } from "react-icons/fa"

import ProveedorComponent from '../../components/ProveedorComponent/ProveedorComponent'

import axios from 'axios';

class Proveedores extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: null,
          };
    }
    componentDidMount = () => {
        axios({
          method: 'GET',
          url: 'http://35.166.113.228:8080/providers/low-stock-products',
          data: {},
        })
          .then(response => {
            console.log(response);
            if (response.data.code === 200 && response.data.status === 'success') {
              const products = JSON.parse(response.data.products);
              console.log('algo');
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
        return (
            <div className="default-container flex-center">
               {products != null && <ProveedorComponent products={products} />}
            </div>
        )
    }
}

export default Proveedores;