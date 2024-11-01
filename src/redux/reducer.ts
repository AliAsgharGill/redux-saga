import { ADD_TO_CART } from "./constants";

const initialState = {
  cart: [],
};

export const cartData = (state = initialState, action: any) => {
  console.log("Action in cartData Reducer: ", action);
  console.log("Action type is : ", action.type);
  console.log("State is : ", state);

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.data],
      };
    default:
      return state;
  }
};
