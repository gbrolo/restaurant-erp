import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText, Input, CardFooter, Button } from "reactstrap"

// import './receipt-component.css'

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            passwordValidation: '',
            userPermissions: []
        }
    }    

    render = () => {     
        console.log(this.state)
        return (
            <div className="receipt-component-container">
                <Card>
                    <CardBody>
                        <CardTitle><strong>Crear un nuevo usuario</strong></CardTitle>
                        <Input onChange={(e) => this.setState({ name: e.target.value })} className="input-create" type="text" placeholder="Ingresa el nombre" />
                        <Input onChange={(e) => this.setState({ email: e.target.value })} className="input-create" type="email" placeholder="Ingresa el correo" />
                        <Input onChange={(e) => this.setState({ password: e.target.value })} className="input-create" type="password" placeholder="Ingresa la contraseña" />
                        <Input onChange={(e) => this.setState({ passwordValidation: e.target.value })} className="input-create" type="password" placeholder="Ingresa la contraseña nuevamente" />
                        <Input className="input-create" type="select" >
                            <option>Selecciona</option>
                            <option value="all-access">all-access</option>                            
                        </Input>
                    </CardBody>
                    <CardFooter>
                        <Button>Crear usuario</Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default CreateUserComponent