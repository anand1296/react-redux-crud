import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./../components/Product/Product";
import axios, { AxiosResponse } from "axios";
import { setProducts } from "../store/products/actions";
import { __Product } from "../store/products/constants";
import "../components/Product/Product.css";
import { RootState } from "../store/store";
import { Dispatch } from "redux";

const ProductList = () => {
  const products: Array<__Product> = useSelector<RootState, Array<__Product>>(
    (state) => state.productStore.products
  );
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(setProducts())
  }, []);
  console.log("products", products);

  return (
    <div className="ui grid container">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
