import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText, Input, CardFooter, Button,Form, FormGroup, Label, FormText} from "reactstrap"

import axios from 'axios'

// import './receipt-component.css'

class ProveedorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            passwordValidation: '',
            userPermissions: []
        }
    }    

    changeUserPermissions = (permission) => {
        const { userPermissions } = this.state
        
        if (!userPermissions.includes(permission) && permission != 'null') {
            userPermissions.push(permission)
        }

        this.setState({ userPermissions })
    }

    createUser = () => {
        const { name, email, password, passwordValidation, userPermissions } = this.state

        axios({
            method: "POST",
            url: "http://localhost:8080/users/create", // Esta ruta debeberia ser otra y cambiarse por una ruta para enviar estos pedidos
            data: { name, email, password, userPermissions: JSON.stringify(userPermissions) }
        }).then(response => {
            console.log(response)
            if (response.data.code === 200 && response.data.status === "success") {
                alert(response.data.message)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    render = () => {     
        const { name, email, password, passwordValidation } = this.state
        
        return (
            <div className="receipt-component-container">
                <Card>
                    <CardBody>
                    <CardTitle><strong>Solicitar nuevo pedido a proveedor</strong></CardTitle>
                    <Form>
        <FormGroup>
        <Label for="exampleSelect">Seleccione a un proveedor</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Isopan</option>
            <option>Lipton</option>
            <option>Pollo rey</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Titulo del pedido</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Pedido No. xx " />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Fecha para recibir el pedido</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Seleccione los productos que desea</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>Pan Integral</option>
            <option>Cajas de te frío</option>
            <option>Docena de Aguacates</option>
            <option>Libra de pollo</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Mensaje adicional al proveedor</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Form>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={() => this.createUser()}>Enviar pedido</Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default ProveedorComponent;