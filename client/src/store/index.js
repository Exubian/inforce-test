import { applyMiddleware, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import { productReducer } from "./reducers/productReducer"

export const store = createStore(productReducer, applyMiddleware(thunk))
