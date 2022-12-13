import React from "react";
import "./style-sheets/root/global.css";
import "./style-sheets/root/reset.css";
import Button from "./components/Button";
import { TextoSecundario } from "./components/TextoSecundario";
import { TextoPrimario } from "./components/TextoPrimario";

export default function App() {
  return (
    <>
      <TextoPrimario>¡Bienvenido a Chatu!</TextoPrimario>
      <Button>Iniciar sesión</Button>
      <TextoSecundario
        link = "clickeando aquí"
      >¿Eres nuevo?, puedes crear una cuenta nueva<br/></TextoSecundario>
    </>
  );
}
