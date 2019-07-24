 
import React, { Component } from 'react';
import ReactDOM from 'react-dom' ;
import mysql from 'mysql' ;
  import axios from 'axios';

 import App1 from './App1.js';
 

 import './login.css';

 import './App.css';
 
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Route } from 'react-router-dom';
 
  import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
 
 export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
 
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
     
    event.preventDefault();
    
    const { history } = this.props;
    history.push('/App1');


    const {email, password } = this.state;
    var data={
      "email":email,
      "Password":password
        }

    var url='http://localhost:5000/login_Auth/';
    fetch(url, {
        method:'GET', // 'GET', 'PUT', 'DELETE', etc.
        body: JSON.stringify(data),
        crossDomain: true,
        headers: new Headers({
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*"
        }),
        
        mode: 'cors',
    })


    .then(response => response.json())
    .then(json => {

    console.log("json", json);


    })  
    .catch(error => console.error(error))

    if ((email== 's.nader57@yahoo.com' && password == 'sara'))
    history.push('/App1');


        }
    

  render() {
    return (
      <div className="form">

        <Form onSubmit={this.handleSubmit}>
            <p>Enter the correct Email and Password... </p>
          <Form.Group controlId="email" bsSize="large">
          Email:
            <Form.Control style={{marginLeft:30 ,width:250 ,height:30 ,backgroundColor:'pink'}}
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
        
          <Form.Group controlId="password" bsSize="large">
              Pass   :
            <Form.Control  style={{marginLeft:30 ,width:250 ,height:30 ,backgroundColor:'pink'}}
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
           
          </Form.Group>
          <br/>
           
          <Button style={{  marginLeft:130 ,width:200 ,height:50 ,color:'red' ,backgroundColor:'black' }} 
            block
            bsSize="large"
             type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

 