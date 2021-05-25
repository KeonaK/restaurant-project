import axios from "axios";
import * as actionTypes from "../constants/pizzaConstants";

export const getPizzaRequest = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PIZZAS_REQUEST });

    const { data } = await axios.get("/api/pizzas");

    dispatch({
      type: actionTypes.GET_PIZZAS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_PIZZAS_FAIL,
      payload: err.response && err.response.data ? err.response.data : err,
    });
  }
};
//need id to get the details
export const getPizzaDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PIZZA_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/pizzas/${id}`);

    dispatch({
      type: actionTypes.GET_PIZZA_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_PIZZA_DETAILS_FAIL,
      payload: err.response && err.response.data ? err.response.data : err,
    });
  }
};
//removing the pizza
export const removePizzaDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PIZZA_DETAILS_RESET });
};
