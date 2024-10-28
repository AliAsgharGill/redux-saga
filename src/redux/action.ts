import { IProduct } from "../types/interface";

export const addToCart = (data: IProduct) => {
  console.warn(" AddToCart Action is called", data);
  return {
    type: "ADD_TO_CART",
    data,
  };
};
