import { combineReducers } from 'redux';

import products from './product.reducer';
import users from './user.reducer';
import cart from './cart.reducer';
import {reducer as form} from 'redux-form';

export default combineReducers({
    products,
    users,
    cart,
    form
})