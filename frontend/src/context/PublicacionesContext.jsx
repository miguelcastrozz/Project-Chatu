import {createContext} from "react";

export const PublicacionesContext = createContext();

export function PublicacionesContextProvider(props) {
  // IMPLEMENTACIÓN
  return (
    <PublicacionesContext.Provider value={{
      // ITEMS
    }}>
    </PublicacionesContext.Provider>
  );
}
