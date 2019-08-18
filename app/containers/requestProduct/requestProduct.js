import React, { Component } from 'react'
import { FaArrowLeft, FaArrowRight, FaReceipt, FaBoxOpen, FaHandsHelping, FaIdBadge } from "react-icons/fa"

import RequestProductComponent from '../../components/requestProductComponent/requestProductComponent'

class requestProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }    

    render = () => {        
        return (
            <div className="default-container flex-center">
                <RequestProductComponent />
            </div>
        )
    }
}

export default requestProduct