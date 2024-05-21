import { Provider } from "react-redux";
import { store } from "@/store/index"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './utils/prototypes'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
