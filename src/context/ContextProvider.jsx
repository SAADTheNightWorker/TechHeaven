import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, reducer, initialState }) => {
  return (
   
   <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useContextState = () => useContext(StateContext);
