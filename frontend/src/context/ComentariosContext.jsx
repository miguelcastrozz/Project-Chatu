import {createContext} from "react";

export const ComentariosContext = createContext();

export function InicioSessionContextProvider(props) {
  // IMPLEMENTACIÓN
  return (
    <ComentariosContext.Provider value={{
      // ITEMS
    }}>
    </ComentariosContext.Provider>
  );
}
