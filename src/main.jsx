import React from "react";
import { createRoot } from "react-dom/client"; // corrected import
import App from "./App.jsx";
import "./index.css";
import Header from "./Sections/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./context/ContextProvider.jsx";
import { initialState, reducer } from "./context/Reducer.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    
      <StateProvider initialState={initialState} reducer={reducer}>
        <Header />
        <App />
      </StateProvider>
    
  </BrowserRouter>
);
