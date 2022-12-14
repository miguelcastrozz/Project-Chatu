import {createContext} from "react";

export const UsuariosContext = createContext();

export function InicioSessionContextProvider(props) {
  // IMPLEMENTACIÓN
  return (
    <UsuariosContext.Provider value={{
      // ITEMS
    }}>
    </UsuariosContext.Provider>
  );
}
