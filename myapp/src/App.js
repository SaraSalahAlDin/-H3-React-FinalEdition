 
import React, { Component } from 'react';
import ReactDOM from 'react-dom' ;
 
 
import add from './add.js';
import upd from './upd.js';

import home from './home.js';

import update from './update';
import del from './delete.js';
 import axios from 'axios';
 
 import App1 from './App1.js';
 import login from './login.js';


 import './login.css';

 import './App.css';
 import Bootstrap from "react-bootstrap";


import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Route ,Switch } from 'react-router-dom';
 
  import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
 

const App = () => (
    <div className="app-routes">
        <Router>
       <Switch>

       <Route path="/upd" component={upd} />

       <Route path="/App1" component={App1} />

       <Route path="/home" component={home} />


        <Route path="/add" component={add} />

        <Route path="/" component={login} />


        </Switch>
        </Router>
     </div>
   
  );
  
  export default App;

 