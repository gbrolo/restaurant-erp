import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText } from "reactstrap"

import axios from 'axios'

import './receipt-component.css'

class ReceiptComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {     
            receipt: this.props.receipt,
            receiptItems: null
        }
    }  
    
    componentDidMount = () => {
        const { receipt } = this.state

        let receiptItems = []

        this.axiosCancelSource = axios.CancelToken.source()

        receipt.receiptItems.forEach((item, index, array) => {
            axios({
                method: 'POST',
                url: 'http://35.166.113.228:8080/order-products/get',                    
                data: { id: item.id },
                cancelToken: this.axiosCancelSource.token
            }).then(response => {
                // console.log('response', response)
                if (response.data.code === 200 && response.data.status === 'success') {
                    const orderProduct = JSON.parse(response.data.product)
                    orderProduct['quantity'] = item.quantity
                    // console.log(orderProduct)
                    receiptItems.push(orderProduct)

                    this.setState({ receiptItems })
                }
            }).catch(error => {
                
            })                
        })
    }
    
    componentWillUnmount = () => {
        this.axiosCancelSource.cancel('Receipt unmounted.')
    }

    render = () => {     
        const { receipt, receiptItems } = this.state
        // console.log(receipt)

        return (
            <div className="receipt-component-container">
                {
                    receiptItems != null &&
                    <Card>
                        <CardBody>
                            <CardTitle><strong>Factura: </strong>{receipt.id}</CardTitle>
                            <CardText><strong>Nombre: </strong>{receipt.name}</CardText>
                            <CardText><strong>Nit: </strong>{receipt.nit}</CardText>
                            <CardText><strong>Dirección: </strong>{receipt.address}</CardText>
                            <CardText><strong>Fecha: </strong>{new Date(receipt.date_created.seconds * 1000).toString()}</CardText>
                            {
                                receiptItems.map((item, index) => {
                                    return(
                                        <CardText key={index}>({item.quantity}) {item.name}, Total: Q. {item.retailPrice * item.quantity}</CardText>
                                    )
                                })
                            }
                            <CardText><strong>Subtotal </strong>Q. {parseFloat(receipt.total)}</CardText>
                           
                            <CardText><strong>Total más impuestos: </strong>Q. {parseFloat(receipt.total) + parseFloat(receipt.total * 0.12)}</CardText>
                        </CardBody>
                    </Card>
                }
            </div>
        )
    }
}

export default ReceiptComponent