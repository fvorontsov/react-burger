import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { App } from "./components/app/App";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = setupStore();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
