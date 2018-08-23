export default function(state={cart:[]}, action){
    switch(action.type){
        case 'ADD_TO_CART':{
            state = {...state, cart:state.cart.concat(action.payload)}
            break;
        }
    }

    return state;
}