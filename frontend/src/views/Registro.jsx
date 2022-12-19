import Container from "react-bootstrap/Container";
import Botones from "../components/botones";
import Titulo from "../components/titulo";
import IngresarTexto from "../components/IngresarTexto";

import { useState } from "react";

const nombre = "Ingrse un nombre para reconocerlo";
const nombreDUsuario = "Ingrese un nombre de usuario";
const correo = "Ingrese su correo";
const contraseña = "Ingrese una contraseña";

export default function Registro() {
  //state
  const [Nombre] = useState("");

  function obtenerDatos() {
    console.log(Nombre);
  }

  //Contenido de la vista
  return (
    <>
      <Container className="Registro">
        <Titulo>¡Hola!</Titulo>
        <Container className="Registro-form">
          <p>Nombre</p>
          <IngresarTexto placeholder={nombre}></IngresarTexto>
          <p>Nombre de usuario</p>
          <IngresarTexto placeholder={nombreDUsuario}></IngresarTexto>
          <p>Email</p>
          <IngresarTexto type="email" placeholder={correo}></IngresarTexto>
          <p>Contraseña</p>
          <IngresarTexto
            type="password"
            placeholder={contraseña}
          ></IngresarTexto>
          <p>Año de nacimiento</p>
          <IngresarTexto type="year"></IngresarTexto>
        </Container>
        <Container className="Registro-button">
          <Botones width={60} onClikc={obtenerDatos}>
            Crear Cuenta
          </Botones>
        </Container>
      </Container>
    </>
  );
}
