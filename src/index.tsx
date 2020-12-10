import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --selected: #BFBFBF;
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: monospace;
  }
  button {
      outline: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
