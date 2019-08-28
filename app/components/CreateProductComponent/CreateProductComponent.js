import React, { Component } from 'react'
import {
    Card, CardBody, CardTitle, CardText, Input, CardFooter, Button
} from "reactstrap"
import axios from 'axios'

// import './receipt-component.css'

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)


        this.state = {
            product: {
                date: null,
                description: null,
                name: null,
                price: 0,
                stock: 0
            }
        }
    }

    changeProductProperty = (property, value) => {
        const { product } = this.state
        product[property] = value
        this.setState({ product })
    }

    createProduct = () => {
        const { product } = this.state

        axios({
            method: "POST",
            url: "http://localhost:8080/products/create",
            data: { product: JSON.stringify(product) }
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
        // const { name, email, password, passwordValidation } = this.state

        return (
            <div className="receipt-component-container">
                <Card>
                    <CardBody>
                        <CardTitle><strong>Crear un nuevo producto</strong></CardTitle>
                        <Input onChange={(e) => this.changeProductProperty('name', e.target.value)} className="input-create" type="text" placeholder="Nombre" />
                        <Input onChange={(e) => this.changeProductProperty('description', e.target.value)} className="input-create" type="text" placeholder="Descripción" />
                        <Input onChange={(e) => this.changeProductProperty('date', e.target.value)} className="input-create" type="text" placeholder="Fecha de caducidad AAAA-MM-DD" />
                        <Input onChange={(e) => this.changeProductProperty('stock', parseInt(e.target.value))} className="input-create" type="numeric" placeholder="Stock" />
                        <Input onChange={(e) => this.changeProductProperty('price', parseFloat(e.target.value))} className="input-create" type="numeric" placeholder="Precio por unidad" />
                    </CardBody>
                    <CardFooter>
                        <Button onClick={() => this.createProduct()}>Crear producto</Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default CreateProductComponent