import React, { Component } from 'react';
import { Table } from 'reactstrap';

import './inventory-component.css';

class InventoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
    };
  }

  render = () => {
    // TODO que esta data no este quemada sino que se llene con el request, izi
    const { products } = this.state;
    console.log(products);
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Fecha de caducidad</th>
            <th>Cantidad disponible</th>
            <th>Precio unitario (Q)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            console.log(item);
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };
}

export default InventoryComponent;
