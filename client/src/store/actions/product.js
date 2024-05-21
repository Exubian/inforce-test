import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './types';

export const fetchProducts = () => {
  return async(dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
      let response = await fetch(`${import.meta.env.VITE_SERVER}/products`);
      response = await response.json();
      console.log(response);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response });
    } catch (err) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: err.message });
    }
  }
}