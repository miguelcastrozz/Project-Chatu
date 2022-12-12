import React from "react";
import "./style-sheets/global.css";
import "./style-sheets/reset.css";
import IniciarSession from "./components/IniciarSession";

export default function App() {
  return (
    <div>
      <IniciarSession>Iniciar sesión</IniciarSession>
    </div>
  )
}
