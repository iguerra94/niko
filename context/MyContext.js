
import React, { createContext, useState } from "react";

const AppStateContext = createContext(null);
const AppDispatchContext = createContext(null);

// product template
//
// product image url
// product model name
// product model gender
// product model color
// product sizes selected
// product price

function AppContextProvider({ children }) {
  const [products, setProducts] = useState({
    currentFavoriteItems: [],
    currentCartItems: []
  });

  return (
    <AppStateContext.Provider value={products}>
      <AppDispatchContext.Provider value={setProducts}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export { AppContextProvider, AppStateContext, AppDispatchContext };