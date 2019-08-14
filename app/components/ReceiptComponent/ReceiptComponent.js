import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText } from "reactstrap"

import './receipt-component.css'

class ReceiptComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {     
            receipt: this.props.receipt       
        }
    }    

    render = () => {     
        const { receipt } = this.state
        console.log(receipt)

        return (
            <div className="receipt-component-container">
                <Card>
                    <CardBody>
                        <CardTitle><strong>Factura: </strong>{receipt.id}</CardTitle>
                        <CardText><strong>Nombre: </strong>{receipt.name}</CardText>
                        <CardText><strong>Nit: </strong>{receipt.nit}</CardText>
                        <CardText><strong>Dirección: </strong>{receipt.address}</CardText>
                        <CardText><strong>Fecha: </strong>{new Date(receipt.date_created.seconds * 1000).toString()}</CardText>
                        {
                            receipt.receiptItems.map((item, index) => {
                                return(
                                    <CardText key={index}>({item.quantity}) {item.name}, Total: Q. {item.price * item.quantity}</CardText>
                                )
                            })
                        }
                        <CardText><strong>Total facturado: </strong>Q. {parseFloat(receipt.total)}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default ReceiptComponent