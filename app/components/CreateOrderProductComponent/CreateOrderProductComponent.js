import React, { Component } from 'react'
import {
    Card, CardBody, CardTitle, CardText, Input, CardFooter, Button, Spinner
} from "reactstrap"
import axios from 'axios'

import './order-product-component.css'

class CreateOrderProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {
                name: null,
                retailPrice: null,
                ingredientsArray: [],
            },
            inventoryProducts: null,
            productToAdd: {
                name: null,
                id: null,
                qty: null
            }
        }
    }

    changeProductProperty = (property, value) => {
        const { product } = this.state
        product[property] = value
        this.setState({ product })
    }

    changeProductToAdd = (id) => {        
        const { productToAdd, inventoryProducts } = this.state
        const toAddInfo = inventoryProducts.filter(p => p.id === id)[0]
        productToAdd['name'] = toAddInfo.name
        productToAdd['id'] = toAddInfo.id
        this.setState({ productToAdd })
    }

    changeProductToAddQty = (value) => {
        const { productToAdd } = this.state
        productToAdd['qty'] = parseInt(value)
        this.setState({ productToAdd })
    }

    addIngredientToProduct = () => {
        const { product, productToAdd } = this.state
        const ingredientsArray = product.ingredientsArray
        ingredientsArray.push(productToAdd)
        product['ingredientsArray'] = ingredientsArray
        let productToAddNew = { name: null, id: null, qty: null }
        this.setState({ product, productToAdd: productToAddNew })
    }

    createProduct = () => {
        const { product } = this.state

        axios({
            method: "POST",
            url: "http://35.166.113.228:8080/order-products/create",
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

    componentDidMount = () => {
        axios({
            method: 'GET',
            url: 'http://35.166.113.228:8080/products/getall',
            data: {},
        }).then(response => {
            if (response.data.code === 200 && response.data.status === 'success') {
                const inventoryProducts = JSON.parse(response.data.products)
                this.setState({ inventoryProducts })
            } else {
                alert('No se pudo obtener el listado de productos. Refresque la página.')
            }
        })
    }

    render = () => {
        const { inventoryProducts, productToAdd, product } = this.state
        console.log(this.state)
        return(
            <div className='receipt-component-container'>
                {
                    inventoryProducts &&
                    <Card>
                        <CardBody>
                            <CardTitle><strong>Crear un nuevo producto</strong></CardTitle>
                            <CardText>Este es un producto que puede estar en una orden de cliente.</CardText>
                            <Input onChange={(e) => this.changeProductProperty('name', e.target.value)} className="input-create" type="text" placeholder="Nombre" />                        
                            <Input onChange={(e) => this.changeProductProperty('retailPrice', parseInt(e.target.value))} className="input-create" type="numeric" placeholder="Precio de venta" />
                            <CardText>Selecciona los ingredientes que lleva este producto.</CardText>
                            {
                                product.ingredientsArray.map((ingredient, index) => {
                                    return(
                                        <p key={index}>{ingredient.name} ({ingredient.qty})</p>
                                    )
                                })
                            }
                            <div className='item-selection-container'>
                                <Input onChange={(e) => this.changeProductToAdd(e.target.value)} type="select" id="select-orderProduct-items">
                                    <option>Selecciona un ingrediente</option>
                                    {
                                        inventoryProducts.map((product, index) => {
                                            return(
                                                <option key={index} value={product.id}>{product.name}</option>
                                            )
                                        })
                                    }                                
                                </Input>
                            </div>
                            {
                                productToAdd.id != null &&
                                <p>Seleccionado: {productToAdd.name}</p>
                            }
                            {
                                productToAdd.id != null &&
                                <Input onChange={(e) => this.changeProductToAddQty(e.target.value)} className="input-create" type="numeric" placeholder="Cantidad" />
                            }
                            {
                                productToAdd.id != null &&                        
                                <Button onClick={() => this.addIngredientToProduct()} disabled={productToAdd.qty != null && productToAdd.id != null ? false : true}>Agregar ingrediente</Button>
                            }
                        </CardBody>
                        <CardFooter>
                            <Button onClick={() => this.createProduct()}>Crear producto</Button>
                        </CardFooter>
                    </Card>
                }
                {
                    !inventoryProducts &&
                    <div className="spinner-container">
                        <Spinner color="dark"/>
                    </div>
                }
            </div>
        )
    }
}

export default CreateOrderProductComponent