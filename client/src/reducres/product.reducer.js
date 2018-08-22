

export default function(state = {products:[], productDetails:{}}, action){
    switch(action.type){
        case 'GET_PRODUCTS':{
            state = {...state, products:action.payload }
            break;
        }

        case 'GET_PRODUCT_DETAILS':{
            state = {...state, productDetails:action.payload}
            break;
        }
    }

    return state;
}