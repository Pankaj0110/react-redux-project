
import Axios from 'axios';

export function getProducts(){

    return function(dispatch){
        Axios.get('http://localhost:4000/products')
        .then((response)=>{
            dispatch({
                type:'GET_PRODUCTS',
                payload: response.data
            })
        })
        .catch((err)=> console.log("error::", err));
    }
}


export function signup(data){
    return {
        type:'SIGNUP',
        payload:data
    }
}

export function login(data){
    return function(dispatch){
        Axios.post('http://localhost:4000/login',data)
        .then((response)=>{
            dispatch({
                type:'LOGIN',
                payload:response.data
            })
        })
        .catch(err => console.log('err:', err));
    } 
}


export function getProductDetails(data){
    return function(dispatch){
        Axios.get('http://localhost:4000/productdetails/'+data)
        .then((response)=>{
            dispatch({
                type:'GET_PRODUCT_DETAILS',
                payload:response.data
            })
        })
        .catch(err=> console.log('err', err));
    }
}

export function addToCart(data){
    return function(dispatch){
       // Axios.post('http://localhost:4000/login', data)
        //.then((response)=>{
            dispatch({
                type:'ADD_TO_CART', 
                payload:data
            })
       // })
       // .catch(err=> console.log('err', err))
    }
}