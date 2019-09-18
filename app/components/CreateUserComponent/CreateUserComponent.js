import React, { Component } from 'react'
import {
    Card, CardBody, CardTitle, CardText, Input, CardFooter, Button, TabContent,
    TabPane, Nav, NavItem, NavLink, Row, Col, ListGroup, ListGroupItem
} from "reactstrap"
import classnames from 'classnames';
import axios from 'axios'

// import './receipt-component.css'

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)


        this.state = {
            name: '',
            email: '',
            password: '',
            passwordValidation: '',
            userPermissions: [],
            activeTab: '1'
        }
    }

    changeUserPermissions = (permission) => {
        const { userPermissions } = this.state

        if (!userPermissions.includes(permission) && permission != 'null') {
            userPermissions.push(permission)
        }

        this.setState({ userPermissions })
    }

    createUser = () => {
        const { name, email, password, passwordValidation, userPermissions } = this.state

        axios({
            method: "POST",
            url: "http://35.166.113.228:8080/users/create",
            data: { name, email, password, userPermissions: JSON.stringify(userPermissions) }
        }).then(response => {
            console.log(response)
            if (response.data.code === 200 && response.data.status === "success") {
                alert(response.data.message)
            }
        }).catch(error => {
            console.log(error)
        })
    }


    render = () => {
        const { name, email, password, passwordValidation } = this.state

        return (
            <div className="receipt-component-container">
                <Card>
                    <CardBody>
                        <CardTitle><strong>Crear un nuevo usuario</strong></CardTitle>
                        <Input onChange={(e) => this.setState({ name: e.target.value })} className="input-create" type="text" placeholder="Ingresa el nombre" />
                        <Input onChange={(e) => this.setState({ email: e.target.value })} className="input-create" type="email" placeholder="Ingresa el correo" />
                        <Input onChange={(e) => this.setState({ password: e.target.value })} className="input-create" type="password" placeholder="Ingresa la contraseña" />
                        <Input onChange={(e) => this.setState({ passwordValidation: e.target.value })} className="input-create" type="password" placeholder="Ingresa la contraseña nuevamente" />
                        {
                            password != passwordValidation &&
                            <CardText style={{ color: 'red' }}>Las contraseñas deben ser iguales</CardText>
                        }
                        <Input onChange={(e) => this.changeUserPermissions(event.target.value)} className="input-create" type="select" >
                            <option value="null">Selecciona permisos</option>
                            <option value="all-access">all-access</option>
                        </Input>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={() => this.createUser()}>Crear usuario</Button>
                    </CardFooter>
                </Card>
            </div>

        )
    }
}













export default CreateUserComponent