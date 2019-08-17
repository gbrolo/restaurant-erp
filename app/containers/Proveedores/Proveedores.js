import React, { Component } from 'react'
import { FaArrowLeft, FaArrowRight, FaReceipt, FaBoxOpen, FaHandsHelping, FaIdBadge } from "react-icons/fa"

import ProveedorComponent from '../../components/ProveedorComponent/ProveedorComponent'

class Proveedores extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }    

    render = () => {        
        return (
            <div className="default-container flex-center">
                <ProveedorComponent />
            </div>
        )
    }
}

export default Proveedores;