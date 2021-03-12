
import React, { createContext, useState } from "react";

const AppStateContext = createContext(null);

function AppContextProvider({ children }) {
  const [products, setProducts] = useState({
    currentFavoriteItems: [],
    currentCartItems: []
  });

  return (
    <AppStateContext.Provider value={{products, setProducts}}>
      {children}
    </AppStateContext.Provider>
  );
}

export { AppContextProvider, AppStateContext };