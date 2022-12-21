import "../style-sheets/app.css";

import Boton from "./toolbox/Button";
import Texto from "./toolbox/Input";
import Titulo from "./toolbox/Titulo";

export default function Ingreso() {
  const long = 18;
  const height = 2;

  return (
    <div className="Login">
      <Titulo x={2} y={1} saiz={5}>
        ¡Bienvenido!, nuevo usuario
      </Titulo>
      <Texto x={31} y={12} archtype={"text"} width={long} height={height}>
        usuario:
      </Texto>

      <Texto x={31} y={16} archtype={"password"} width={long} height={height}>
        Contraseña:
      </Texto>

      <Boton x={31} y={20} width={length}>
        Iniciar sesión
      </Boton>
    </div>
  );
}
