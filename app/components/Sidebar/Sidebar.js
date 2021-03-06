import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { FaArrowLeft, FaArrowRight, FaReceipt, FaBoxOpen, FaHandsHelping, FaIdBadge, FaBook } from "react-icons/fa"

import './sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            pathname: this.props.history.location.pathname,
            showSideBar: true
        }
    }   
    
    componentDidMount = () => {
        const { pathname } = this.state

        if (pathname === '/') {
            this.setState({ showSideBar: false })
        }
    }    

    render = () => {
        const { open, showSideBar } = this.state
        console.log(this.props.history.location.pathname)
        return (
            <div>
                {
                    showSideBar &&
                    <div>
                        <div className='header flex-center'>
                        {this.props.history.location.pathname.substr(1).toUpperCase()}
                    </div>
                    {
                        open &&
                        <div className='sidebar-container-open'>                
                            <div className='sidebar-option' onClick={() => this.props.history.push('/facturas')}>
                                <FaReceipt className="icon-separator-sidebar"/>Facturas
                            </div>
                            <div className='sidebar-option' onClick={() => this.props.history.push('/inventarios')}>
                                <FaBoxOpen className="icon-separator-sidebar"/>Inventarios
                            </div>
                            <div className='sidebar-option' onClick={() => this.props.history.push('/productos-ordenes')}>
                                <FaBook className="icon-separator-sidebar"/>Gestionar productos de órdenes
                            </div>
                            <div className='sidebar-option' onClick={() => this.props.history.push('/proveedores')}>
                                <FaHandsHelping className="icon-separator-sidebar"/>Pedidos a proveedores
                            </div>
                            <div className='sidebar-option' onClick={() => this.props.history.push('/usuarios')}>
                                <FaIdBadge className="icon-separator-sidebar"/>Usuarios
                            </div>

                            <div className='sidebar-arrow-container-open' onClick={() => this.setState({ open: !open })}>
                                <FaArrowLeft />
                            </div>
                        </div>
                    }

                    {
                        !open &&
                        <div className='sidebar-container-closed'>                
                            <div className='sidebar-option' onClick={() => this.props.history.push('/facturas')}>
                                <FaReceipt />
                            </div>
                            <div className='sidebar-option' onClick={() => this.props.history.push('/inventarios')}>
                                <FaBoxOpen />
                            </div>
                            <div className='sidebar-option' onClick={() => this.props.history.push('/productos-ordenes')}>
                                <FaBook />
                            </div>
                            <div className='sidebar-option' onClick={() => this.props.history.push('/proveedores')}>
                                <FaHandsHelping />
                            </div>
                            <div className='sidebar-option' onClick={() => this.props.history.push('/usuarios')}>
                                <FaIdBadge />
                            </div>

                            <div className='sidebar-arrow-container-closed' onClick={() => this.setState({ open: !open })}>
                                <FaArrowRight />
                            </div>
                        </div>
                    }
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(Sidebar)