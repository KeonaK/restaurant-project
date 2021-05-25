import * as actionTypes from "../constants/pizzaConstants";

export const getPizzaReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PIZZAS_REQUEST:
      return {
        loading: true,
        pizzas: [],
      };
    case actionTypes.GET_PIZZAS_SUCCESS:
      return {
        pizzas: action.payload,
        loading: false,
      };
    case actionTypes.GET_PIZZAS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getPizzaDetailsReducer = (state = { pizza: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PIZZA_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PIZZA_DETAILS_SUCCESS:
      return {
        loading: false,
        pizza: action.payload,
      };
    case actionTypes.GET_PIZZA_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PIZZA_DETAILS_RESET:
      return {
        pizza: {},
      };
    default:
      return state;
  }
};
