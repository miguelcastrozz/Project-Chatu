import {createContext, useState} from "react";

const UsuariosContext = createContext();

export function UsuarioProvider({children}) {

  const [user, setUser] = useState("");

  return (
    <UsuariosContext.Provider value={{user, setUser}}>
      {children}
    </UsuariosContext.Provider>
  )

}

export default UsuariosContext;
