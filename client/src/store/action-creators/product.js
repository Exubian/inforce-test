import { Dispatch } from "react";

export const fetchProducts = () => {
  return async(dispatch) => {
    const response = await fetch(`${import.meta.env.VITE_SERVER}/products`)
    dispatch({type:"FETCH_PRODUCTS", payload: response})
  }
}