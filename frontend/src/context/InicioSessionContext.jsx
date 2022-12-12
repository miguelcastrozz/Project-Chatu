import {createContext} from "react";

export const InicioSessionContext = createContext();

export function InicioSessionContextProvider(props) {
  // IMPLEMENTACIÓN
  return (
    <InicioSessionContext.Provider value={{
      // ITEMS
    }}>
    </InicioSessionContext.Provider>
  );
}
