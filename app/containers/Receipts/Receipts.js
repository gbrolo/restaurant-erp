import React, { Component } from 'react'
import { FaArrowLeft, FaArrowRight, FaReceipt, FaBoxOpen, FaHandsHelping, FaIdBadge } from "react-icons/fa"
import axios from 'axios'

import ReceiptComponent from '../../components/ReceiptComponent/ReceiptComponent'

class Receipts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            receipts: null
        }
    }    

    componentDidMount = () => {
        axios({
            method: "GET",
            url: "http://35.166.113.228:8080/receipts/getall",
            data: {}
        }).then(response => {
            console.log(response)
            if (response.data.code === 200 && response.data.status === "success") {
                const receipts = JSON.parse(response.data.receipts)
                this.setState({ receipts })
            }
        }).catch(error => {
            console.log(error)
        })
    }

    render = () => {    
        const { receipts } = this.state           
        return (
            <div className="default-container flex-center">
                {
                    receipts != null &&
                    receipts.map((receipt, index) => {
                        return(
                            <ReceiptComponent key={index} receipt={receipt} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Receipts