import {combineReducers} from 'redux';


import defaultReducer from './default/defaultReducer';
import productReducer from './product/productReducer';


const rootReducer = combineReducers({
    default: defaultReducer,
    product: productReducer
});

export default rootReducer;