import {createContext} from "react";

export const ButtonContext = createContext();

export function InicioSessionContextProvider(props) {
  // IMPLEMENTACIÓN
  return (
    <ButtonContext.Provider value={{
      // ITEMS
    }}>
    </ButtonContext.Provider>
  );
}
