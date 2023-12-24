import { combineReducers } from "redux";
import { productReducer } from "./products/reducers";

const reducers = combineReducers({
  productStore: productReducer,
});

export default reducers;
