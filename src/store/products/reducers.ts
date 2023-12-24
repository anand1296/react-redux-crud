import {
  ActionTypes,
  __ProductState,
  __Product,
  __ProductDetails,
} from "./constants";

const initialState: __ProductState = {
  products: [],
  selectedProduct: null,
};

export const productReducer = (
  state = initialState,
  action: { type: string; payload: any }
): __ProductState => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, selectedProduct: null };
    default:
      return state;
  }
};
