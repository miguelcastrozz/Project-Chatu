
import React from "react";
import BarradeNav from "../components/Barra";
import Publicar from "../components/Publicar";
import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import "../stylesheets/app.css";
import Publication from "../components/Publication";
import Login from "./Login";

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
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Cerrar Sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          </Container>
        </Row>
        <Row>
          <Container className="Publicaciones-saludo">
            <h1>{saludar ("Acá nombre")}</h1>
          </Container>
        </Row>
        <Row>
          <Container className="Publicaciones-feed">
            <Publicar></Publicar>
            <Container className="Publicaciones-vista">
              <h1 className="Publi">Publicaciones</h1>
              {publicar("Publicación de acción", "La familia es primero")}
              {publicar("Publicación de terror", "Chucky da miedo")}
              {publicar("Publicación de humor", "El agua moja")}
            </Container>
          </Container>
        </Row>
      </Container>
    </>
  );
}


