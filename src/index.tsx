import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
/**
 * Integrate with SEMATIC STYLE
 */
import "semantic-ui-css/semantic.min.css";

//import Redux, React-redux and Redux-saga tools

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// import Reducers and SagaRedux action channel
import Reducers from "./Reducers";
import { watchFetchAPI } from "./Saga";

// Redux dev tool
export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// apply middleware of Saga
const sagaMiddleware = createSagaMiddleware();

// create Store as Redux flow
const store = createStore(
  Reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchFetchAPI);

ReactDOM.render(
  // Provider wraps up your React application
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
