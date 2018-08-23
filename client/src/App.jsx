import React, { Component } from 'react';
import Signup from './components/signup/signup.component';
import LoginComponent from './components/login/login.component';
import {Switch, Route, Link, withRouter } from 'react-router-dom';
//import logo from '../public/img/Shoping-Bag-PNG.png';
import logo from './logo.svg'
import './App.css';

import * as productActions from './actions/product.actions';

import { connect } from 'react-redux';
import { bindActionCreator, bindActionCreators } from 'redux';
import Products from './components/products/product.component';
import ProductDetailComponent from './components/product-details/productDetails.component';



/* @connect((store)=>{
  console.log("product-store :: ",store);
  return {
    products: store.products
  }
},
(dispatch)=>{
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}) */
// I am using alternative for this. since as of now unable to user @annotations
export class App extends Component {
  constructor(){ 
    super()  
  }
  render() {
    let signup;
    let login;
    if(!this.props.users.user){
      signup =  <li><Link to='/signup'>Sign up</Link></li>
      login = <li><Link to='/login'>Login</Link></li>
    }
    return (
      <div>  
      <div className="App">
        <header className="App-header">{this.username}
          <img src={logo} className="App-logo" alt="logo" />
          <span style={{float:'right', marginRight:'20px',fontSize:'16px',color:'red'}}>Welcome {this.props.users.user?this.props.users.user.user:'Guest'}</span>
       {/*    <h1 className="App-title">Welcome to React</h1> */}
      <div style={{fontSize:2 + 'rem', marginTop:30 + 'px', color:'white'}} className="pull-right">
      <i className="glyphicon glyphicon-shopping-cart"></i> <div className="label">{this.props.cart.cart?this.props.cart.cart.length:0}</div>
      </div>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              {signup}{login}             
            </ul>
          </nav>
        </header>
        
      </div>
      <Switch>
        <Route exact path='/'  render={(props) => (<Products products={this.props.products.products} {...props}/>)}/>
        <Route path='/signup'render={(props) => (<Signup dispatcher={this.props.actions} {...props}/>)}/>
        <Route path='/login' render={(props) => (<LoginComponent dispatcher={this.props.actions} {...props}/>)}/>
        <Route path='/details/:id' render={(props) =>(<ProductDetailComponent dispatcher={this.props.actions} products={this.props.products.products} productDetails={this.props.products.productDetails} {...props}/>)}/>
      </Switch>
      </div>   
    );
  }

  componentDidMount(){
    this.props.actions.getProducts();
  }
}

function mapStatetoProps(store){
  console.log("product-store :: ",store);
  return {
    products: store.products,
    users:store.users,
    cart:store.cart
  }
}
 function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(App));
