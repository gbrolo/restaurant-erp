import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText, Input, CardFooter, Button } from "reactstrap"

import axios from 'axios'

// import './receipt-component.css'

class requestProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }    

    render = () => {     
        
        return (
            <div className="receipt-component-container">
                <Card>
                    <CardBody>
                   
                    </CardBody>
                    <CardFooter>
                     
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default requestProductComponent