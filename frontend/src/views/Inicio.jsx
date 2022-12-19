import "../stylesheets/app.css";

import Container from "react-bootstrap/Container";

import Botones from "../components/botones";
import Titulo from "../components/titulo";
import Subtitulo from "../components/subtitulo";
import Vinculos from "../components/vinculos";

export default function Inicio() {
  return (
    <>
      <Container className="Inicio">
        <Container className="Inicio-arriba">
          <Titulo width={20}>Bienvenido a chatu</Titulo>
          <Subtitulo>Donde las opiniones convergen</Subtitulo>
        </Container>
        <Container className="Inicio-medio">
          <Botones className="Inicio-boton" direccion="Login" width={25}>
            iniciar sesion
          </Botones>
        </Container>
        <Container className="Inicio-abajo">
          <p>¿Eres nuevo en chatu? </p>
          <Vinculos direccion="register"> Clikea aquí.</Vinculos>
        </Container>
      </Container>
    </>
  );
}
