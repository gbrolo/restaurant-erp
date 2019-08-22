import React, { Component } from 'react'
import { FaArrowLeft, FaArrowRight, FaReceipt, FaBoxOpen, FaHandsHelping, FaIdBadge } from "react-icons/fa"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios'


import CreateUserComponent from '../../components/CreateUserComponent/CreateUserComponent'
import ListUserComponent from '../../components/ListUserComponent/ListUserComponent'

class UserCreationPage extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);
        this.state = {
            users: null,
            activeTab: '1'
        }
    }

    componentDidMount = () => {
        console.log('iniciando traer a todos')
        axios({
            method: 'GET',
            url: 'http://localhost:8080/users/getall',
            data: {},
        })
            .then(response => {
                console.log(response);
                if (response.data.code === 200 && response.data.status === "success") {
                    const users = JSON.parse(response.data.users)
                    this.setState({ users })
                }
            })
            .catch(error => {
                console.log("errrrrrrror")
                console.log(error);
            });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render = () => {
        const { users } = this.state
        return (
            <div className="default-container flex-center">
                <div className="default-container flex-center">
                    <Nav tabs style={{ width: '100%' }}>
                        <NavItem >
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Nuevo usuario
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Editar usuario
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab} style={{ width: '100%' }}>
                        <TabPane tabId="1">
                            <div className="default-container flex-center">
                                <CreateUserComponent />
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="default-container flex-center">
                                {
                                    users != null &&
                                    users.map((user, index) => {
                                        return (
                                            <ListUserComponent key={index} user={user} />
                                        )
                                    })
                                }
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        );
    }
}

export default UserCreationPage