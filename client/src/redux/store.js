import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";
import {
  getPizzaReducer,
  getPizzaDetailsReducer,
} from "./reducers/pizzaReducers";

//state store file

const reducer = combineReducers({
  cart: cartReducer,
  getPizzaRequest: getPizzaReducer,
  getPizzaDetails: getPizzaDetailsReducer,
});

//helps with making async request in actions
//redux saga is an alternative to thunk?
const middleware = [thunk];
const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};
const store = createStore(
  reducer,
  //... adds what is in the middleware array so the information is not lost
  //added enhancer that will give access to the state in the browser
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
