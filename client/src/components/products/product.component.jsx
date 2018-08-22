

import React from 'react';
import './products.css';
import {Switch, Route, Link, withRouter } from 'react-router-dom';


class Products extends React.Component {
    constructor(props){
        super(props);
    }
 /* 
                        */
    

    render(){
        if(this.props && this.props.products && this.props.products.products){
            return (
                 <div className="container-fluid">
                    <h4 className="title-text">Today's Deal Products</h4>
                   <div className="row">                    
                        {this.props.products.products.map(prod=>
                          <div className
                          ='col-md-2 col-sm-2' key={prod._id}>
                          <Link to={`/details/${prod._id}`}>
                            <div className="product-img col-centered">
                                    <img src={'./img/'+prod.image} className="img-responsive img-thumbnail" style={{height:200 + 'px', width:'auto'}}/>
                                    <div className="label">{prod.name}</div>
                                    <div>Price :  {prod.price}</div>
                                    <div>Offer: NA</div>
                            </div>
                            </Link>
                          </div>
                        )}                
                    </div>
                </div>                
            )
        }else {
            return (
                <div > No Products Found </div>
            )
        }
        
    }
    componentDidUpdate(){
        console.log('update -> ', this.props)
    }

}



export default Products;


/* return ( <div class='col-md-3 col-sm-2' key={prod._id}>
<div class="product-img col-centered">
        <img src="img/products/apple-tab.jpeg" class="img-responsive img-thumbnail"/>
        <div class="label">{prod.name}</div>
        <div>Price :  {prod.price}</div>
        <div>Offer: NA</div>
</div>
</div>) */