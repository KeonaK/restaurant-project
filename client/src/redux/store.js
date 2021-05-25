import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";

//state store file

const reducer = combineReducers({
  cart: cartReducer,
});

//helps with making async request in actions
//redux saga is an alternative to thunk?
const middleware = [thunk];

const store = createStore(
  reducer,
  //... adds what is in the middleware array so the information is not lost
  //added enhancer that will give access to the state in the browser
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
