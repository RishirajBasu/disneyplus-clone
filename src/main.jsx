import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // The react strictmode renders useEffect, useState, useMemo, useReducer etc twice and hence to prevent that, strictmode is removed
  // <React.StrictMode>
  //   {/* the store here is passed as prop to the app and there by to all the children of the App*/}
  //   <Provider store={store}>
  //     {/* The App will be able to aciton the data exported from the store */}
  //     <App />
  //   </Provider>
  // </React.StrictMode>
  <>
    {/* the store here is passed as prop to the app and there by to all the children of the App*/}
    <Provider store={store}>
      {/* The App will be able to aciton the data exported from the store */}
      <App />
    </Provider>
  </>
);
