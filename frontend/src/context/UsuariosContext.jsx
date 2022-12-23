import {createContext} from "react";

export const UsuariosContext = createContext();

export function UsuariosContextProvider(props) {
  // IMPLEMENTACIÓN
  return (
    <UsuariosContext.Provider value={{
      // ITEMS
    }}>
    </UsuariosContext.Provider>
  )
}
