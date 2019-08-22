import React, { Component, PropTypes } from 'react'
import { Card, CardBody, CardTitle, CardText, Input, CardFooter, Button, Form, FormGroup, Label, FormText } from "reactstrap"
import { withRouter } from 'react-router-dom'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import axios from 'axios'

// import './receipt-component.css'

class ProveedorComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: this.props.products,
      items: []
    };
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
      ;
  }

  addItem = (item) => {
    const { items } = this.state
    items.push(item)
    this.setState({ items })
    console.log('actualizando pedidos', this.state)
  }

  //TODO en este componente deberías mandar info del producto y armar el formulario

  render = () => {
    const { products } = this.state;
    const { items } = this.state;
    console.log(products);
    return (

      <div className="receipt-component-container">
        <h2>Productos con baja disponibilidad</h2>
        {products.map((item, index) => {
          console.log(item);
          return (
            <div>
              <Card key={index}>
                <CardBody>

                  <CardText><strong>Nombre: </strong>{item.name}</CardText>
                  <CardText><strong>Precio unitario: </strong>{item.price}</CardText>
                  <CardText><strong>Disponibilidad: </strong>{item.stock}</CardText>
                </CardBody>
                <CardFooter>
                  <Button onClick={() => this.addItem(item)}>Agregar al pedido</Button>
                </CardFooter>
              </Card>
            </div>

          );
        })}
        <Button onClick={this.printDocument}>Solicitar pedido</Button>
        <div id="divToPrint" >
          {items.map((item, index) => {
            return(
              <div  >
              <Card key={index}>
                <CardBody>
                  <CardText><strong>Nombre: </strong>{item.name}</CardText>
                  <CardText><strong>Precio unitario: </strong>{item.price}</CardText>
                  <CardText><strong>Disponibilidad: </strong>{item.stock}</CardText>
                </CardBody>
              </Card>
            </div>
            )
          })}
        </div>
      </div >
    )
  }
}

export default withRouter(ProveedorComponent);