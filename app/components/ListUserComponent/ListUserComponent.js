import React, { Component } from 'react'
import {
    Card, CardBody, CardTitle, CardText, Input, CardFooter, Button, TabContent,
    TabPane, Nav, NavItem, NavLink, Row, Col, ListGroup, ListGroupItem, 
    Modal, ModalHeader, ModalBody, ModalFooter, Label 
} from "reactstrap"
import classnames from 'classnames';
import axios from 'axios'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user,
            modal: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    changeName = (name) => {
        const { user } = this.state

        user.userName = name

        this.setState({ user })
        console.log('cambio de nombre')
        console.log(this.state)
    }

    changePermissions = (permissions) => {
        const { user } = this.state

        user["userPermissions"] = permissions

        this.setState({ user })
        console.log('cambio de permisos')
        console.log(this.state)
    }    


    updateUser = () => {
        const { user } = this.state
        console.log('el usuario es ', user)

        this.toggle()
        axios({
            method: "POST",
            url: "http://localhost:8080/users/update",
            data: {user: JSON.stringify(user)}
        }).then(response => {
            console.log(response)
            if (response.data.code === 200 && response.data.status === "success") {
                alert(response.data.message)
            }
        }).catch(error => {
            console.log('ERROR')
            console.log(error.message)
            console.log(error)
            
        })
        
    }


    render = () => {
        const { user } = this.state
        console.log(user)

        return (
            <div style={{ width: '100%' }}>
                <Card body>
                    <CardText>Nombre: {user.userName} </CardText>
                    <CardText>Correo electronico: {user.userEmail} </CardText>
                    <Button style={{ width: '50%' }} onClick={this.toggle}> Editar </Button>
                </Card>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Actualizar datos</ModalHeader>
                    <ModalBody>
                        <Label> Actualizar nombre</Label>
                        <Input onChange={(e) => this.changeName(e.target.value)} className="input-create" type="text" placeholder={user.userName} />
                        <Label> Actualizar permisos</Label>
                        <Input onChange={(e) => this.changePermissions(event.target.value)} className="input-create" type="select" >
                            <option value="null">Selecciona permisos</option>
                            <option value="all-access">all-access</option>
                        </Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateUser}>Aceptar</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>


            </div>

        )
    }


}

export default ListUserComponent

