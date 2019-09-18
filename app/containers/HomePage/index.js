import React, { Component } from 'react'
import {
    Card, CardBody, CardTitle, CardText, Input, CardFooter, Button
} from "reactstrap"
import axios from 'axios'
import cookie from 'react-cookies'

class HomePage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: null,
			password: null
		}
	}

	login = () => {
		const { email, password } = this.state

		axios({
            method: "POST",
            url: "http://35.166.113.228:8080/users/login",
			data: { email, password }
        }).then(response => {
			console.log(response)
            if (response.data.status === "success") {
				cookie.save(
					'session', 
					response.data.sessionCookie, 
					{ 
						path: '/',
						maxAge: response.data.options.maxAge
					}
				)
				document.getElementById('rd-normal-user').click();
			} else {
				alert(response.data.message.message)
			}
        }).catch(error => {
            console.log(error)
        })
	}

	render = () => {
		return(
			<div className="default-container flex-center">
				<a id="rd-normal-user" className="rd" href="/facturas">.</a>
				<Card>
                    <CardBody>
                        <CardTitle><strong>Iniciar sesión</strong></CardTitle>
                        <Input onChange={(e) => this.setState({ email: e.target.value })} className="input-create" type="text" placeholder="Correo" />
                        <Input onChange={(e) => this.setState({ password: e.target.value })} className="input-create" type="password" placeholder="Contraseña" />                        
                    </CardBody>
                    <CardFooter>
                        <Button onClick={() => this.login()}>Iniciar sesión</Button>
                    </CardFooter>
                </Card>
			</div>
		)
	}
}

export default HomePage
