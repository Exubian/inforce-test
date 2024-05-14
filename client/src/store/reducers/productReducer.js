const initState = {
  products: [],
}

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS": 
      return {...state, products: action.payload}
    default:
      return state
  }
}