import { getProductsReducer } from "./Reducers/productReducer";
import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import {cartReducer} from "../Redux/Reducers/cartReducer"

const reducer = combineReducers({
    getProducts:getProductsReducer,
    cart: cartReducer,

})

const middleware = [thunkMiddleware ];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)


export default store;

