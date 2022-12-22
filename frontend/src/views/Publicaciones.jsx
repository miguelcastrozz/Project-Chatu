
import React from "react";
import BarradeNav from "../components/Barra";
import Publicar from "../components/Publicar";
import Container from "react-bootstrap/esm/Container";
import {Row} from "react-bootstrap";
import "../stylesheets/app.css";
import Publication from "../components/Publication";

export default function Publicaciones() {

  // Inserte el nombre de usuario de la persona que ingreso

  function saludar(nombre) {
    return (
      `Bienvenido, ${nombre}`
    );
  }

  // Componente publication

  function publicar(titulo, Contenido) {
    return (
      <Publication>
        <h1>{titulo}</h1>
        <p className="parrafo">{Contenido}</p>
      </Publication>
    );
  }

  return (
    <>
      <Container className="Publicaciones">
        <Row>
          <Container className="Publicaciones-navbar">
            <BarradeNav></BarradeNav>
          </Container>
        </Row>
        <Row>
          <Container className="Publicaciones-saludo">
            <h1>{saludar("Acá nombre de usuario")}</h1>
          </Container>
        </Row>
        <Row>
          <Container className="Publicaciones-feed">
            <Publicar></Publicar>
            <Container className="Publicaciones-vista">
              <h1 className="Publi">Publicaciones</h1>
              {publicar("Publicación de acción","La familia es primero")}
              {publicar("Publicación de terror", "Chucky da miedo")}
              {publicar("Publicación de humor", "El agua moja")}
            </Container>
          </Container>
        </Row>
      </Container>
    </>
  );


}


