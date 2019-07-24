 
import React from 'react';
 

export class update extends React.Component {
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
              }
        };
     }
     updateProduct= _ =>{
        const {product}=this.state;
        fetch(`http://localhost:5000/products/update?idd=${product.id}&name=${product.name}&description=${product.description}&productiondate=${product.productiondate}&expirationdate=${product.expirationdate}`)
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
             Pro-ID:
            <input onChange={e=>this.setState({product:{...product , id:e.target.value}})} style={{marginLeft:10 ,width:250 ,height:30 ,backgroundColor:'pink'}} type="text" name="name" />
             </label>

             <br />
            <label style={{marginLeft:100}}>
             Pro-Name:
            <input onChange={e=>this.setState({product:{...product , name:e.target.value}})} style={{marginLeft:10 ,width:250 ,height:30 ,backgroundColor:'pink'}} type="text" name="name" />
             </label>

             <br />
                
             <label style={{marginLeft:100}}>
            Pro-Desc:
            <input onChange={e=>this.setState({product:{...product , description:e.target.value}})} style={{marginLeft:10 ,width:250 ,height:30 ,backgroundColor:'pink'}}type="text" name="name" />
             </label>

             <br />

             <label style={{marginLeft:100}}>
             Pro-Date:
            <input onChange={e=>this.setState({product:{...product , productiondate:e.target.value}})} style={{marginLeft:10 ,width:250 ,height:30 ,backgroundColor:'pink'}} type="date" name="name" />
             </label>
                 
                <br />

             <label style={{marginLeft:100}}>
             Exp-Date:
            <input  value ="" onChange={e=>this.setState({product:{...product , expirationdate:e.target.value}})} style={{marginLeft:10 ,width:250 ,height:30 ,backgroundColor:'pink'}} type="date" name="name" />
             </label>
               
             <br />
               
             <label style={{marginLeft:100}}>
             Prod-Img:
            <input  style={{marginLeft:10 ,width:250 ,height:30 ,backgroundColor:'pink'}} type="text" name="name" />
            <input    style={{ marginLeft:10,width:120 ,height:55 ,color:'red' ,backgroundColor:'black' }} type='submit' value="upload" />


             </label>
            
             <br />  
                <input style={{  marginLeft:100 ,width:250 ,height:50 ,color:'red' ,backgroundColor:'black' }} type='submit' value="Update-Product" onClick={this.updateProduct}/>
            </form>
        );
    }
}

 
export default update; 
