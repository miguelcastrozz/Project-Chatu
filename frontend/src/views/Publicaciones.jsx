import Container from "react-bootstrap/esm/Container";
import Publicacion from "../components/publicacion";
import Botones from "../components/botones";
import Titulo from "../components/titulo";
import { useState } from "react";

import "../stylesheets/app.css";

export default function Publicaciones() {
  //Funcion de string para cargar el nombre de usuario
  function GetNombreUsuario() {
    let nombre = "juan";
    return `hola, ${nombre}`;
  }

  let pruebaset = [
    {
      id : 1,
      titulo: "Prueba de conepto",
    },
    {
      id:2,
      titulo: "Esta es una prueba",
    },
    {
      id: 3,
      titulo: "awefwfwefwfw",
    },
  ];

  const titulos = useState(pruebaset.titulo);

  return (
    <>
      <Container className="Publicaciones">
        <Container>
          <publicacion titulos={titulos}></publicacion>
        </Container>
      </Container>
    </>
  );
}
