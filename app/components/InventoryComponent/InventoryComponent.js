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
            <th>Fecha de ingreso</th>
            <th>Fecha de caducidad</th>
            <th>Cantidad disponible</th>
            <th>Precio unitario (Q)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Leche</td>
            <td>
              Litro de leche utilizado principalmente <br />
              para el café del restaurante.
            </td>
            <td>10/08/2019</td>
            <td>20/08/2019</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Limonada</td>
            <td>
              Botella de limonada principalmente <br />
              para bebida en almuerzos.
            </td>
            <td>10/08/2019</td>
            <td>12/08/2019</td>
            <td>10</td>
            <td>8</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Tomate</td>
            <td>
              Utilizado en ensaladas y panes
              <br />
              para bebida en almuerzos.
            </td>
            <td>10/08/2019</td>
            <td>12/08/2019</td>
            <td>25</td>
            <td>8</td>
          </tr>
        </tbody>
      </Table>
    );
  };
}

export default InventoryComponent;
