import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Loader from "./components/Loader.jsx";

import App from "./App.jsx";
import "./index.css";
import Store from "./redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={Store}>
         <App />
 <Loader />
      </Provider>
   </React.StrictMode>
);
