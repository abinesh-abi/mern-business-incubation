import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReduser from "./features/userSlice";
import adminReduser from './features/adminSlice'

const store = configureStore({
  reducer:{
    user: userReduser,
    admin : adminReduser
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   </React.StrictMode>
);
