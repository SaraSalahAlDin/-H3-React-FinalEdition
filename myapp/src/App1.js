 
import React, { Component } from 'react';
import ReactDOM from 'react-dom' ;
 
import App from './App.js';

 
import add from './add.js';
import udp from'./upd.js';

import home from './home.js';

import update from './update';
import del from './delete.js';
import './login.css';

import './App.css';
 
 

import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Route } from 'react-router-dom';
 import { withStyles, makeStyles } from '@material-ui/core/styles';
 import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import del_update from './del_update.js';
 

import './App.css';


var divStyle = {
  
    width: '100%',
     backgroundColor: '#664c51s'
      
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
  
 
  
   
   
 
  
export class App1 extends React.Component {
  state = {
      loggedIn: false,
      v: 7,
      vert: false,
      cls: 'row',
  }
  loginHandle = () => {
      this.setState(prevState => ({
          loggedIn: !prevState.loggedIn
      }))
  }
  changeStyle() {
      //alert('dd');

      let v = this.dropdown.style.display;
      let nv = (v === 'block') ? 'none' : 'block';
      //alert (" "+v+" ,:"+nv)

      this.dropdown.style.display = nv;
      //let vert = !this.state.vert;
      //let cls = !vert ? 'block' : 'none';
      //this.setState({vert:vert,cls:cls})


  }
  render() {
      let cls = this.state.cls; //?
      return (
          <Router>
              <div className="App">
                  <ul className='nav' >


                  
                    
                   
                      

                      <li>
                          <NavLink to="/home" exact activeStyle={
                              { color: 'green' }
                          }> home</NavLink>
                      </li>


                      <li>
                          <NavLink to="/add" exact activeStyle={
                              { color: 'green' }
                          }> Add-Product</NavLink>
                      </li>

                      
                      <li style={{ display: cls }}>
                          <NavLink to="/del_update" exact activeStyle={
                              { color: 'green' }
                          }>Update-Product</NavLink>
                      </li>

                      <li>
                          <NavLink to="/delete" exact activeStyle={
                              { color: 'green' }
                          }> Delete-Product</NavLink>
                      </li>
                       

                  </ul>

                 
                  
                   

                  
                  
               <Route path="/home" exact strict render={
                      () => {
                          return (<home/>);
                      }
                  } />
                  <Route path="/add" exact strict render={
                      () => {
                          return (<add/>);
                      }
                  } />

               
                  <Route path="/update" exact strict render={
                      () => {
                          return (<update />);
                      }
                  } />

                 <Route path="/delete" exact strict render={
                      () => {
                          return (<delete/>);
                      }
                  } />

                


                    <Route path="/home" exact strict component={home} />

                  <Route path="/add" exact strict component={add} />
                  <Route path="/del_update" exact strict component={del_update} />
                  <Route path="/delete" exact strict component={del} />
 
                



              </div>


        </Router>
      );
  }
}
  

   
 
export default App1; 

