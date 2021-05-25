import axios from "axios";
import * as actionTypes from "../constants/cartConstants";

//getting product details and adding it to the cart
//use thunk to make this possible
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { pizzaData } = await axios.get(`/api/pizzas/${id}`);

  dispatch({
    //type of action we want
    type: actionTypes.ADD_TO_CART,
    //expecting item from the reducer
    payload: {
      type: pizzaData._id,
      toppings: pizzaData.toppings,
      size: pizzaData.size,
      price: pizzaData.price,
      gluten: pizzaData.gluten,
      //quantity comes from the add to cart function
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  //removes the item
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
