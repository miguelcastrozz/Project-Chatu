import React from "react";
import "./style-sheets/root/global.css";
import "./style-sheets/root/reset.css";
import "./style-sheets/app.css"
import Input from "./components/Input";
import Button from "./components/Button";

export default function App() {
  return (
    <form className="formulario">
      <Input
        type="text"
      ></Input>
      <Input
        type="text"
      />
      <Button>Ingresar sesión</Button>
    </form>
  );
}
