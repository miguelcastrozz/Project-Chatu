/*Pagina inestable
NO TOCAR!!!!!!!!! */

import "../style-sheets/app.css";

import Boton from "./toolbox/Button";
import Texto from "./toolbox/Input";
import Titulo from "./toolbox/Titulo";

export default function Registrar() {
  const long = 18;
  const height = 2;

  return (
    <div className="Login">
      <Titulo x={2} y={1} saiz={5}>
        ¡Hola!
      </Titulo>
      <Texto x={31} y={6} archtype={"text"} width={long} height={height}>
        Usuario:
      </Texto>
      <Texto x={31} y={7} archtype={"text"} width={long} height={height}>
        Nombre de usuario:
      </Texto>

      <Texto x={31} y={8} archtype={"text"} width={long} height={height}>
        E-mail:
      </Texto>

      <Texto x={31} y={9} archtype={"password"} width={long} height={height}>
        Contraseña:
      </Texto>

      <Texto x={31} y={10} archtype={"number"}width={long} height={height}>
        año de nacimiento:
      </Texto>

      <Boton x={31} y={11} width={long}>
        Crear Cuenta:
      </Boton>
    </div>
  );
}
