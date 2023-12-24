import { Dispatch } from "redux";
import productsApi from "../../utils/apis/products-api";
import { ActionTypes, __Product, __ProductDetails } from "./constants";

export const setProducts = () => {
  return async (dispatch: Dispatch) => {
    const response = await productsApi.get("/products");
    console.log(response);
    dispatch({
      type: ActionTypes.SET_PRODUCTS,
      payload: response.data,
    });
  }
};

export const setSelectedProduct = (id: string) => {
  return async (dispatch: Dispatch) => {
    const response = await productsApi.get(`/products/${id}`);
    console.log(response);
    dispatch({
      type: ActionTypes.SET_SELECTED_PRODUCT,
      payload: response.data,
    });
  }
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
