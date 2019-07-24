import React from 'react';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { fontFamily } from '@material-ui/system';
import 'bootstrap/dist/css/bootstrap.min.css'

export class del extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'StartName',
            age: 50,
            product:{
                id:'' ,
                name:'',
                description:'',
                productiondate:'',
                expirationdate:''
              },
              deleteProductModal: false
            
        };
     }

     toggleDeleteProductModal() {
        this.setState({
          deleteProductModal: ! this.state.deleteProductModal
        });
        

      }

      deleteProduct=_=> {
        this.setState({
            deleteProductModal: ! this.state.deleteProductModal
        });

         
      }
    
     delProduct= _ =>{
        const {product}=this.state;
        fetch(`http://localhost:5000/products/delete?idd=${product.id}`)
      .then(response=>response.json())
      .then(this.getProducts)
      .catch(err=>console.error(err))
      this.setState({
        deleteProductModal: false
      })
      }
     render() {
        const {product}=this.state;
        return (
          <div>  
              <div className='form'>
            <form >
              

              <label  style={{color:'red'}}> Enter the ID of Product that you want to delete </label>
              <br />
              
            <label style={{marginLeft:100}}>
             Product-ID:
            <input  style={{marginLeft:10 ,width:250 ,height:30 }} type="text" name="name" onChange={e=>this.setState({product:{...product , id:e.target.value}})}/>
             </label>
            
             
            
             <br />  
                
            </form>
            <button onClick={this.deleteProduct} style={{  marginLeft:100 ,width:200 ,height:50 ,color:'red' ,backgroundColor:'black' }}>Delete-Pro</button>
            </div>
            <div className="App container">      
          <Modal isOpen={this.state.deleteProductModal} toggle={this.toggleDeleteProductModal.bind(this)}>
  <ModalHeader toggle={this.toggleDeleteProductModal.bind(this)}></ModalHeader>
  <ModalBody>
 <h1> Are you sure? </h1>
  </ModalBody>
  <ModalFooter>
    <Button color="primary" onClick={this.delProduct}>YES</Button>{' '}
    <Button color="secondary" onClick={this.toggleDeleteProductModal.bind(this)}>NO</Button>
  </ModalFooter>
  </Modal>
  </div>
            </div>
        );
    }
}

 
export default del; 