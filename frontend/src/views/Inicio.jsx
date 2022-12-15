import { Container } from "react-bootstrap";

import Botones from "../components/Botones";
import Titulo from "../components/titulo";
import Subtitulo from "../components/subtitulo";
import Vinculos from "../components/vinculos";

export default function Inicio() {
  return (
    <>
      <Container>
        <Titulo>Bienvenido a chatu</Titulo>
        <Subtitulo>donde las opiniones convergen.</Subtitulo>
        <Botones>iniciar sesion</Botones>
        <p>¿Eres nuevo?</p>
        <Vinculos direccion="Login">
          clikea aqui para crear una nueva cuenta.
        </Vinculos>
      </Container>
    </>
  );
}
