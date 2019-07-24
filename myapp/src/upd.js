import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { height } from '@material-ui/system';
import DatePicker from "react-datepicker";
 



 

export class upd extends React.Component {
    constructor(props) {
        super(props);
          
        

        this.state = {
             
             id:this.props.location.eid
         };
        
      }

    
     
      UpdateImage(image){
        
          alert(image);
          const {product}=this.state;

          fetch(`http://localhost:5000/products/update?id=${product.id}&imagr=${product.image}`)

       
        .then(response=>response.json())
     
        .catch(err=>console.error(err))
      }
     
   
           
      render() {

        const {product}=this.state;

         return (
            <form className='form'>
              
                      
              <input style={{marginLeft:10 ,width:250 ,height:50 ,backgroundColor:'pink'}} type="file" name='file'  
                 onChange={e=>this.setState({product:{...product , image:e.target.value}})}

                 id={this.props.id}

                    />
                      
             <br />
            
                 <input style={{  marginLeft:100 ,width:200 ,height:50 ,color:'red' ,backgroundColor:'black' }} type='submit' value="Update" onClick={()=>this.UpdateImage(product.image)}/>
            

            </form>
        );

       
                          
           
                
        
    }
}

 
export default upd; 
