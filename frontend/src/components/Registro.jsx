/*
Pagina inestable
NO TOCAR ⚠️⚠️⚠️
*/

import "../style-sheets/app.css";

import Button from "./toolbox/Button";
import Texto from "./toolbox/Input";
import Titulo from "./toolbox/Titulo";

export default function Registrar() {

  const long = 18;
  const height = 2;

  return (

    <div className="Login">

      <Titulo x={2} y={1} saiz={5}>¡Hola!</Titulo>

      <Texto x={31} y={12} archtype={"text"} width={long} height={height}>usuario</Texto>

      <Texto x={31} y={12} archtype={"text"} width={long} height={height}>nombre de usuario.</Texto>

      <Texto x={30} y={12} archtype={"text"} width={long} height={height}>email</Texto>

      <Texto x={31} y={16} archtype={"password"} width={long} height={height}>Contraseña</Texto>

      <Texto x={31} y={16} archtype={"number"} width={long} height={height}>año de nacimiento</Texto>

      <Button x={31} y={20} width={long}>Crear Cuenta.</Button>

    </div>

  );

}
