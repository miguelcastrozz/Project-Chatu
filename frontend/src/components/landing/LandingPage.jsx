import "../../style-sheets/landing.css";

import Titulo from "../toolbox/Titulo";
import Subtitulo from "../toolbox/Subtitulo";
import Button from "../toolbox/Button";
import Rectangle from "../toolbox/visuales/Rectangle";
import Anchor from "../toolbox/Anchor";

export default function Landing() {
  return (

    <div className="principal">

      <Titulo x={3} y={1} saiz={5}>
        ¡Bienvenido a Chatu!.
      </Titulo>

      <Rectangle x={36} y={2} width={15} height={3} color={"red"} />

      <Rectangle
        x={37}
        y={7}
        width={20}
        height={2}
        color={"rgba(112, 0, 255, 1)"}
      />

      <Rectangle
        x={35}
        y={1}
        width={10}
        height={2}
        color={"rgba(0, 163, 255, 1)"}
      />

      <Subtitulo x={4} y={5} saiz={1}>
        Donde las ideas convergen
      </Subtitulo>

      <Button x={20} y={16} width={20}>
        Iniciar sesión
      </Button>

      <Subtitulo x={21} y={18} saiz={1}>
        ¿Eres nuevo?, puedes crear una cuenta <br />
        <Anchor x={6} y={0}>
          Clickea aquí.
        </Anchor>

      </Subtitulo>
    </div>

  );
}
