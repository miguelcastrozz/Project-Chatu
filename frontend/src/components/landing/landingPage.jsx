import React from "react";
import "./landingcss/landing.css";
import Titulo from "../toolbox/titulo";
import Subtitulo from "../toolbox/subtitulo";
import Boton from "../toolbox/boton";
import Cajas from "../toolbox/visuales/caja";
import Anchor from "../toolbox/anchor";

export default function Landing() {
  return (
    <div className="principal">
      <Titulo x={3} y={1} saiz={5}>
        ¡Bienvenido a Chatu!.
      </Titulo>

      <Cajas x={35} y={2} width={15} height={3} color={"red"} />

      <Cajas
        x={37}
        y={7}
        width={20}
        height={2}
        color={"rgba(112, 0, 255, 1)"}
      />

      <Cajas
        x={35}
        y={1}
        width={10}
        height={2}
        color={"rgba(0, 163, 255, 1)"}
      />

      <Subtitulo x={4} y={5} saiz={1}>
        Donde las ideas convergen
      </Subtitulo>
      <Boton x={20} y={16} width={20}>
        Iniciar sesion
      </Boton>
      <Subtitulo x={21} y={18} saiz={1}>
        ¿Eres nuevo?, puedes crear una cuenta <br />
        <Anchor x={6} y={0}>
          crear cuenta
        </Anchor>
      </Subtitulo>
    </div>
  );
}
