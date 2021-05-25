//keeps track of default state
const CART_INITIAL_STATE = {
  cartItems: [],
};

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "ADD_TO_CART";

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //getting item we are adding
      //payloads contain the data we need to pass to reducers
      const item = action.payload;
      return {
        //spread state and add to cart
        ...state,
        //push item into the array
        cartItems: [...state.cartItems, item],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        //filter through array where it is not equal to what has been added
        cartItems: state.cartItems.filter(
          (props) => props.pizza !== action.payload
        ),
      };
    default:
      return state;
  }
};
