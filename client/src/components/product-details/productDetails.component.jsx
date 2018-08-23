

import React from 'react';
import './productDetails.css';

export default class ProductDetailComponent extends React.Component{
    constructor(props){
        super(props);
        this.selectedProduct;
    }
    render(){       
        if(this.props.productDetails && this.props.productDetails.productdetails){
            this.selectedProduct = this.props.productDetails.productdetails;
            return (
                <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="product-img col-centered">
                            <img src={'/img/' + this.selectedProduct.image} className="img-responsive img-thumbnail" style={{ height: 300 + 'px', width: 'auto', padding:20 + 'px' }} />
                        </div>
                    </div>
                    <div className="col-md-8 description">
                        <div className="row">
                            <div className="col-sm-2 text-warning">Product</div><div className="col-sm-4 text-primary">{this.selectedProduct.name}</div>
                            <div className="col-sm-2 text-warning">Price</div><div className="col-sm-4 text-primary">{this.selectedProduct.price}</div>
                            <div className="col-sm-2 text-warning">Color</div><div className="col-sm-4 text-primary">Black/White</div>
                            <div className="col-sm-2 text-warning">Seller</div><div className="col-sm-4 text-primary">{this.selectedProduct.seller}</div>
                            <div className="col-sm-12 text-warning">Highlights</div><div className="col-sm-12 text-primary">
                                5' screen <br/>
                                Full HD : 1920×1080 px <br/>
                                Dolby 3-D sound <br/>
                                3G/4G Dual SIM  <br/>
                                Micro SD card (supported upto 500 Gb)
                            </div>
                            <div className="col-sm-1 text-warning">offers</div>
                            <div className="col-sm-5 text-primary">
                                <ul>
                                    <li>HDFC Credit Card 10% cash back</li>
                                    <li>ICICI Bank Creditcard 8% cash back</li>
                                </ul>
                            </div>
                        </div>
                       {/*  <span className="label"></span><span className="text-primary">Samsung J7</span> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 pull-right">
                    <button className="btn btn-success button-position" onClick={this.addToCart.bind(this)}>Add to Cart</button>
                    </div>
                </div>
            </div>
            )
        }else{
            return(
                <center><h2>Loading</h2></center>
            )
        }
        
    }

 componentDidMount(){
    const { match: { params } } = this.props;
    this.props.dispatcher.getProductDetails(params.id);    
 }

 addToCart(){
     //this.selectedProduct['userid'] = this.props.users
     this.props.dispatcher.addToCart(this.selectedProduct);
 }

}


