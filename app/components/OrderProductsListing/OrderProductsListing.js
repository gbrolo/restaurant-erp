import React, { Component } from 'react'
import {
    Table, Card, CardBody, CardTitle, CardText, Input, CardFooter, Button, Spinner
} from "reactstrap"
import axios from 'axios'

class OrderProductsListing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderProducts: null
        }
    }

    componentDidMount = () => {
        axios({
            method: 'GET',
            url: 'http://35.166.113.228:8080/order-products/getall',
            data: {},
        }).then(response => {
            if (response.data.code === 200 && response.data.status === 'success') {
                const orderProducts = JSON.parse(response.data.products)
                this.setState({ orderProducts })
            } else {
                alert('No se pudo obtener el listado de productos. Refresque la página.')
            }
        })
    }

    render = () => {
        const { orderProducts } = this.state
        console.log(this.state)
        return(
            <div className='receipt-component-container'>
                {
                    orderProducts != null &&
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Precio de Venta</th>
                                <th>Ingredientes</th>
                                <th></th>
                            </tr> 
                        </thead>
                        <tbody>
                            {
                                orderProducts.map((product, index) => {
                                    return(
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{product.name}</td>
                                            <td>{product.retailPrice}</td>
                                            {
                                                product.ingredientsArray.map((ingredient, idx) => {
                                                    return(
                                                        <p key={idx}>{ingredient.name} ({ingredient.qty})</p>
                                                    )
                                                })
                                            }
                                            <td></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                }
            </div>
        )
    }
}

export default OrderProductsListing