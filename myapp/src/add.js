import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { height } from '@material-ui/system';
import DatePicker from "react-datepicker";



 

export class add extends React.Component {
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
                expirationdate:'',
                available:'',
                checked:false ,
                   av: "1",
                   image:''

 


              }
        };
        this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox
        this.handleChecked1 = this.handleChecked1.bind(this); // set this, because you need get methods from CheckBox

     }

     handleChecked () {
         
 
         const {product}=this.state;
               
  
        this.setState({product:{...product ,available:'1'}});
        
 
      }


      handleChecked1 () {
         
 
                 
        const {product}=this.state;
               
  
        this.setState({product:{...product ,available:'0'}});
        
 
      }
    
     addProduct= _ =>{
        const {product}=this.state;
    
       

        fetch(`http://localhost:5000/products/add?name=${product.name}&description=${product.description}&productiondate=${product.productiondate}&expirationdate=${product.expirationdate}&available=${product.available}&image=${product.image}`)
      .then(response=>response.json())
     
      .catch(err=>console.error(err))
         
      const { history } = this.props;
      history.push('/App1');

      }

       
      
     
    render() {


        const {product}=this.state;
        return (
            <form className='form'>
              
            <label style={{marginLeft:100}}>
             Pro-Name:
            <input  style={{marginLeft:10 ,width:250 ,height:50 ,backgroundColor:'pink'}} type="text" name="name" onChange={e=>this.setState({product:{...product , name:e.target.value}})} />
             </label>

             <br />
                
             <label style={{marginLeft:100}}>
            Pro-Desc:
            <input  style={{marginLeft:10 ,width:250 ,height:50 ,backgroundColor:'pink'}}type="text" name="name" onChange={e=>this.setState({product:{...product , description:e.target.value}})} />
             </label>

             <br />

             <label style={{marginLeft:100}}>
             Pro-Date:
            <input style={{marginLeft:10 ,width:250 ,height:50 ,backgroundColor:'pink'}} type="date" name="name" onChange={e=>this.setState({product:{...product , productiondate:e.target.value}})}/>
 
             </label>
                 
                <br />

             <label style={{marginLeft:100}}>
             Exp-Date:
            <input  style={{marginLeft:10 ,width:250 ,height:50 ,backgroundColor:'pink'}} type="date" name="name" onChange={e=>this.setState({product:{...product , expirationdate:e.target.value}})}/>
             </label>
             
             <br />

               
               
               
              <input style={{marginLeft:10 ,width:250 ,height:50 ,backgroundColor:'pink'}} type="file" name='file'
               onChange={e=>this.setState({product:{...product , image:e.target.value}})}

                    />
        
      

             <br />


             <label style={{marginLeft:100}}>
                Available :
             <input  style={{marginLeft:10 ,width:250 ,height:30 ,backgroundColor:'pink'}} type="checkbox" name="name"  checked={this.state.checked} onChange={this.handleChecked}/>
             </label>

             <br />


             <label style={{marginLeft:100}}>
                NotAvailable :
             <input  style={{marginLeft:10 ,width:250 ,height:30 ,backgroundColor:'pink'}} type="checkbox" name="name"  checked={this.state.checked} onChange={this.handleChecked1}/>
             </label>
             
             <br />
            
                 <input style={{  marginLeft:100 ,width:200 ,height:50 ,color:'red' ,backgroundColor:'black' }} type='submit' value="Add-Product" onClick={this.addProduct}/>
            

            </form>
        );

       
                          
           
                
        
    }
}

 
export default add; 
