import React, { Component } from 'react'
import CreateOrderProductComponent from '../../components/CreateOrderProductComponent/CreateOrderProductComponent';
import OrderProductsListing from '../../components/OrderProductsListing/OrderProductsListing';

class OrderProducts extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render = () => {
        return(
            <div className='default-container flex-center'>
                <CreateOrderProductComponent />
                <OrderProductsListing />
            </div>
        )
    }
}

export default OrderProducts