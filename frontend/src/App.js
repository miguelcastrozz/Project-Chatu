import React from "react";
import "./style-sheets/root/global.css";
import "./style-sheets/root/reset.css";
import IniciarSession from "./components/IniciarSession";

export default function App() {
  return (
    <>
      <IniciarSession>Iniciar sesión</IniciarSession>
    </>
  );
}
