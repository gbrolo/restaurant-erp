import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText, Input, CardFooter, Button,Form, FormGroup, Label, FormText} from "reactstrap"
import { withRouter } from 'react-router-dom'
import axios from 'axios'

// import './receipt-component.css'

class ProveedorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          products: this.props.products,
        };
    }    

   //TODO en este componente deberías mandar info del producto y armar el formulario

    render = () => {     
        const { products } = this.state;
        console.log(products);
        return (
         
            <div className="receipt-component-container">
               <h2>Productos con baja disponibilidad</h2>
               {products.map((item, index) => {
            console.log(item);
            return (
              <Card key={index}>
                    <CardBody>
                    
                      <CardText><strong>Nombre: </strong>{item.name}</CardText>
                      <CardText><strong>Precio unitario: </strong>{item.price}</CardText>
                      <CardText><strong>Disponibilidad: </strong>{item.stock}</CardText>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={() => this.props.history.push('/nuevoPedido')}>Solicitar pedido</Button>
                    </CardFooter>
                </Card>
            );
          })}
                
            </div>
        )
    }
}

export default withRouter(ProveedorComponent);