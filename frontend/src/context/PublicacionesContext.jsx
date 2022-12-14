import {createContext} from "react";

export const PublicacionesContext = createContext();

export function InicioSessionContextProvider(props) {
  // IMPLEMENTACIÓN
  return (
    <PublicacionesContext.Provider value={{
      // ITEMS
    }}>
    </PublicacionesContext.Provider>
  );
}
