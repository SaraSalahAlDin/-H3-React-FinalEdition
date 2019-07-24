import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { height } from '@material-ui/system';
import DatePicker from "react-datepicker";



 

export class del_update extends React.Component {
    constructor(props) {
        super(props);
          
        

        this.state = {
             
            product:{
                id:'' ,
                name:'',
                description:'',
                productiondate:'',
                expirationdate:'',
                available:'',
               
               }
        };
 
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

               
             
               
             <label style={{marginLeft:100}}>
             Prod-Img:
            <input  style={{marginLeft:10 ,width:250 ,height:50 ,backgroundColor:'pink'}} type="text" name="name" />
            <input    style={{ marginLeft:10,width:150 ,height:60 ,color:'red' ,backgroundColor:'black' }} type='submit' value="upload" />
             </label>

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
            <label>
                 <input style={{  marginLeft:100 ,width:200 ,height:50 ,color:'red' ,backgroundColor:'black' }} type='submit' value="Add-Product" onClick={this.addProduct}/>
                 <input style={{  marginLeft:40 ,width:230 ,height:50 ,color:'red' ,backgroundColor:'black' }} type='submit' value="delete-Product" onClick={this.addProduct}/>
                 </label>

            </form>
        );

       
                          
           
                
        
    }
}

 
export default del_update; 
