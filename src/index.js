import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import reportWebVitals from "./reportWebVitals"
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Product from "./component/Product/Product"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import reducer from "./Redux/Reducer/Reducer"

export const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
