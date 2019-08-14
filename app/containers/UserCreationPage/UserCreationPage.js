import React, { Component } from 'react'
import { FaArrowLeft, FaArrowRight, FaReceipt, FaBoxOpen, FaHandsHelping, FaIdBadge } from "react-icons/fa"

import CreateUserComponent from '../../components/CreateUserComponent/CreateUserComponent'

class UserCreationPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }    

    render = () => {        
        return (
            <div className="default-container flex-center">
                <CreateUserComponent />
            </div>
        )
    }
}

export default UserCreationPage