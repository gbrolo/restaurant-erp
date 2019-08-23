import React, { Component } from 'react';
import { Table,Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,Input  } from 'reactstrap';

import './inventory-component.css';
import axios from 'axios'
class InventoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
      modal: false,
      name:'',
      des:' ',
      price:0,
      stock: 0,
      date: ' ',
      id: ''
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  updateProduct = () => {
    const name  = this.state.name;
    const des = this.state.des;
    const date = this.state.date;
    const price = this.state.price;
    const stock = this.state.stock;
    const id = this.state.id;
    console.log('el producto es ', name)
    const product = {
      id,
      date,
      description:des,
      name,
      price,
      stock
  }
  console.log(product)
  console.log(JSON.stringify(product))
    this.toggle()
    axios({
        method: "POST",
        url: "http://localhost:8080/products/update",
        data: {product: JSON.stringify(product)}
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
deleteProduct = (id) => {
  const name  = this.state.name;
  const des = this.state.des;
  const date = this.state.date;
  const price = this.state.price;
  const stock = this.state.stock;
  //const id = id;
  console.log('el producto es ', name)
  const product = {
    id
}
console.log(product)
console.log(JSON.stringify(product))
  axios({
      method: "POST",
      url: "http://localhost:8080/products/delete",
      data: {id:id}
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
changeName = (name,id) => {

  this.setState({ name: name })
  this.setState({ id: id })

  this.setState({ product })
  console.log('cambio de nombre')
  console.log(this.state)
}

changedate = (name) => {
  const { product } = this.state

  product.date = name

  this.setState({ product })
  console.log('cambio de nombre')
  console.log(this.state)
}
changestock = (name) => {
  const { product } = this.state

  product.stock = name

  this.setState({ product })
  console.log('cambio de nombre')
  console.log(this.state)
}
changeprice = (name) => {
  const { product } = this.state

  product.price = name

  this.setState({ product })
  console.log('cambio de nombre')
  console.log(this.state)
}
  render = () => {
    // TODO que esta data no este quemada sino que se llene con el request, izi
    const { products } = this.state;
    console.log(products);
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Fecha de caducidad</th>
            <th>Cantidad disponible</th>
            <th>Precio unitario (Q)</th>
            <th></th>
          </tr> 
        </thead>
        <tbody>
          {products.map((item, index) => {
            console.log(item);
            return (
              <tr key={index}>
                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Actualizar datos</ModalHeader>
              <ModalBody>
                  <Label> Actualizar nombre</Label>
                  <Input onChange={(e) => this.changeName(e.target.value,item.id)}  className="input-create" type="text" placeholder={item.name} />
                  <Label> Actualizar Descripción</Label>
                  <Input onChange={(e) => this.setState({ des: e.target.value })}  className="input-create" type="text" placeholder={item.description} />
                  <Label> Actualizar fecha de caducidad</Label>
                  <Input onChange={(e) => this.setState({ date: e.target.value })}  className="input-create" type="text" placeholder={item.date} />
                  <Label> Actualizar Stock</Label>
                  <Input onChange={(e) => this.setState({ stock: e.target.value })} className="input-create" type="text" placeholder={item.stock} />
                  <Label> Actualizar Precio</Label>
                  <Input onChange={(e) => this.setState({ price: e.target.value })}  className="input-create" type="text" placeholder={item.price} />
              </ModalBody>
              <ModalFooter>
                  <Button color="primary" onClick={this.updateProduct}>Aceptar</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
              </ModalFooter>
          </Modal>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td><Button style={{ width: '100%',height:'10%' }} onClick={this.toggle}> Editar </Button>
                <br></br><br></br>
                <Button style={{ width: '100%',height:'10%' }} onClick={() =>this.deleteProduct(item.id)}> Eliminar</Button>
                </td>
               
              </tr>
             

            );
          })}
        </tbody>
      </Table>
      
    );
  };
}

export default InventoryComponent;
