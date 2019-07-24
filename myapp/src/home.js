import React, { Component } from 'react';
import ReactDOM from 'react-dom' ;
 
 import update from './update';
import App from './App.js';
import udp from'./upd.js';

 
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


 
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Route } from 'react-router-dom';

 import { withStyles, makeStyles } from '@material-ui/core/styles';

 import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Lightbox from 'react-images';

 
import './App.css';

import {
  withRouter
} from 'react-router-dom'

var divStyle = {
  
    width: '100%',
     backgroundColor: '#664c51'
      
    //padding: "10px",
    //fontFamily: "Arial
   };
   
  
   var divStyle1 = {
    
    width: '100%',
    height:'150px',
     backgroundColor: 'pink',
     marginLeft: '700px',
    //padding: "10px",
    fontFamily: "Arial"
   };
  
   const aStyle={
    width:300,
    height:300
};
   
  
   export class home extends Component {

    constructor() {
      super();
       this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox
       this.handleChecked1 = this.handleChecked1.bind(this); 
    }



    state = {
        products: [],
        Images: [] ,
        checked:false,
        isChecked:true ,
        editProductData: {
          id: '',
          name: '',
          description: '',
          productiondate:'',
          expirationdate:'',
          available:'',
          im :''
        },

        editProductModal: false

 
      };
    
     

      componentDidMount() {
         this.getProducts();
  

      }

      toggleEditProductModal() {
        this.setState({
          editProductModal: ! this.state.editProductModal
        });
      }

      editProduct(id, name, description,productiondate,expirationdate,available) {
        this.setState({
          editProductData: { id, name, description,productiondate,expirationdate ,available}, editProductModal: ! this.state.editProductModal
        });
      }
     
       


      handleChecked () {
         
        this.state.checked = this.state.isChecked;
                              
      }
     
      handleChecked1 () {
         
        this.state.checked = !this.state.isChecked;
                              
      }
          

      getProducts= _ =>{
        fetch('/products')
    
        .then(response => response.json())
        .then(response => this.setState({products:response.data}))
               

        
        .catch(err=>console.error(err))
      }


      updateProduct= _ =>{
        
        const {editProductData}=this.state;
        fetch(`http://localhost:5000/products/update?idd=${editProductData.id}&name=${editProductData.name}&description=${editProductData.description}&productiondate=${editProductData.productiondate}&expirationdate=${editProductData.expirationdate}&available=${editProductData.available}`)
      
      .then((response) => {
        this.getProducts();
  
        this.setState({
          editProductModal: false, editProductData: { id: '', name: '', description: '',productiondate:'',expirationdate:'',available:'' }
        })
      })
      .catch(err=>console.error(err))
      this.getProducts();
      this.setState({
        editProductModal: false, editProductData: { id: '', name: '', description: '',productiondate:'',expirationdate:'' ,available:'' }
      })
      }

      delProduct= _ =>{
        const {editProductData}=this.state;
        fetch(`http://localhost:5000/products/delete?idd=${editProductData.id}`)
      .then(response=>response.json())
      .then(this.getProducts)
      .catch(err=>console.error(err))
      this.getProducts();
      this.setState({
        editProductModal: false
      })
      }
     
    
      renderProduct=({id,name,description,productiondate,expirationdate,available,image})=> {

                const {product}=this.state;



    
 
      if(available=="1") {

        this.handleChecked();

      }
        else { 
        if(available=="0") {

          this.handleChecked1();
  
        }}
     
 
     return(


      
            
      <div style={{ marginLeft: '100px' }} >
            <br></br>
    
            <br></br>
    
            <br></br> <br></br> <br></br> <br></br>  <br></br>     
            
      <TableRow  style={divStyle} align="center">
      <TableCell  style={{fontSize:20, color:'pink'}}>Product_ID</TableCell>
      <TableCell align="right"style={{fontSize:20, color:'pink'}}>Name</TableCell>
      <TableCell align="right" style={{fontSize:20, color:'pink'}}>Description&nbsp;</TableCell>
      <TableCell align="right" style={{fontSize:20, color:'pink'}}>productiondate&nbsp;</TableCell>
      <TableCell align="right" style={{fontSize:20, color:'pink'}}>expirationdate&nbsp;</TableCell>
      <TableCell align="right" style={{fontSize:20, color:'pink'}}>Available&nbsp;</TableCell>
      <TableCell align="right" style={{fontSize:20, color:'pink'}}>Image&nbsp;</TableCell>

      <TableCell align="right" style={{fontSize:20, color:'pink'}}>Action&nbsp;</TableCell>
      <TableCell align="right">&nbsp;</TableCell>

       </TableRow>
    
       <TableRow style={divStyle1} >
               <TableCell style={{fontSize:20}} component="th" scope="row"> {id} </TableCell>  
               <TableCell style={{fontSize:20}} align="right">{name}</TableCell>
    
                 <TableCell style={{fontSize:20}} align="right">{description}</TableCell>
                 <TableCell style={{fontSize:20}} align="right">{productiondate}</TableCell>
                 <TableCell style={{fontSize:20}}  align="right">{expirationdate}</TableCell>
                   
                 <TableCell  style={{fontSize:20}} align="right" ><input style={{marginLeft:50 ,width:100 ,height:30 }} type="checkbox"  checked={this.state.checked}
                 /> </TableCell>

             <TableCell style={{fontSize:20}}  align="right">

               

                
                 <img alt="image" style={{width:"200px", height:"200px"}  }
                      

                  src={process.env.PUBLIC_URL+'/images/'+image}

                 

                  onClick={() => {
 
                   
                   this.props.history.push({
                     pathname:'/upd',
                     state:{eid:id}
                                               


                   })
                    
                   
                  
                  }}
                  />
 

             </TableCell>
                
                <TableCell align="right"><button  style={{  marginLeft:80 ,width:110 ,height:60 ,color:'red' ,backgroundColor:'black' }} onClick={this.editProduct.bind(this, id, name, description,productiondate,expirationdate ,available)}>UPDATE OR DELETE</button>&nbsp;</TableCell>
                 <TableCell align="right">&nbsp;</TableCell>
                             
   
                </TableRow>

                
 
        
        
       </div>
      
    
    
    );
    
    
      }
    
    
    
      render() {
    
 
 
            const {products}=this.state;
        return (
         
            <div className='App'>  
       
           <br/> <br/> <br/>

           <label style={{fontSize:50, color:'pink'}}>The List of Products  </label>



           <div className="App container">      
          <Modal isOpen={this.state.editProductModal} toggle={this.toggleEditProductModal.bind(this)}>
  <ModalHeader toggle={this.toggleEditProductModal.bind(this)}>Edit a new Product</ModalHeader>
  <ModalBody>
  <FormGroup>
      <Label for="id">ID</Label>
      <Input id="id" value={this.state.editProductData.id} onChange={(e) => {
        let { editProductData } = this.state; 
  
        editProductData.id = e.target.value;
  
        this.setState({ editProductData });
      }} />
    </FormGroup>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input id="name" value={this.state.editProductData.name} onChange={(e) => {
        let { editProductData } = this.state;
  
        editProductData.name = e.target.value;
  
        this.setState({ editProductData });
      }} />
    </FormGroup>
    <FormGroup>
      <Label for="description">Desc</Label>
      <Input id="description" value={this.state.editProductData.description} onChange={(e) => {
        let { editProductData } = this.state;
  
        editProductData.description = e.target.value;
  
        this.setState({ editProductData });
      }} />
    </FormGroup>

   

    <FormGroup>
      <Label for="prodate">Pro-Date</Label>
      <Input id="prodate"  type ="date" value={this.state.editProductData.productiondate} onChange={(e) => {
        let { editProductData } = this.state;
  
        editProductData.productiondate = e.target.value;
  
        this.setState({ editProductData });
      }} />
    </FormGroup>

    <FormGroup>
      <Label for="expdate">Exp-Date</Label>
      <Input id="expdate"  type ="date" value={this.state.editProductData.expirationdate} onChange={(e) => {
        let { editProductData } = this.state;
  
        editProductData.expirationdate = e.target.value;
  
        this.setState({ editProductData });
      }} />
    </FormGroup>

    <FormGroup>
      <Label for="avb">Availablity</Label>
      <Input id="avb" value={this.state.editProductData.available} onChange={(e) => {
        let { editProductData } = this.state;
  
        editProductData.available = e.target.value;
  
        this.setState({ editProductData });
      }} />
    </FormGroup>



    
  
  </ModalBody>
  <ModalFooter>
    <Button color="success" onClick={this.updateProduct}>Update Product</Button>{' '}
    <Button color="danger" onClick={this.delProduct}>Delete Product</Button>{' '}
    <Button color="secondary" onClick={this.toggleEditProductModal.bind(this)}>Cancel</Button>
  </ModalFooter>
  </Modal>
  </div>

          
            {products.map(this.renderProduct)}


            {this.state.showUpdate&& <updateform

            img ={this.state.image}
              
              
              
              />}

           

           
          </div>
        );
          
      }
    }
    
    export default home;