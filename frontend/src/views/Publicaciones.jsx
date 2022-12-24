import {useContext, useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

import {Form, Row} from "react-bootstrap";

import BarradeNav from "../components/Barra.jsx";
import Boton from "../components/Boton.jsx";
import Container from "react-bootstrap/esm/Container";
import Multimedia from "../components/multimedia";
import Publicar from "../components/Publicar.jsx";
import Publication from "../components/Publication.jsx";
import TokenContext from "../context/TokenContext.jsx";

import "../stylesheets/app.css";

export default function Publicaciones() {

  function saludar(nombre) {
    const Redirection = useNavigate();
    const {token} = useContext(TokenContext);
    const [cookies, setCookies] = useCookies(["token"]);
    const currentToken = token ? token : cookies.token;
    useEffect(() => {
      if (token) {
        return `Bienvenido, ${nombre}`;
      } else {
        Redirection("/login");
      }
    });
  }

  function comentario(comentario) {
    return (
      <Container className="publicacion-comentario">
        <p className="publicacion-comentarios-caja">{comentario}</p>
      </Container>
    );
  }

  // Componente publication
  function publicar(titulo, Contenido, comentarios) {
    return (
      <Publication>
        <Container className="Publicacion-top">
          <h1>{titulo}</h1>
          <Multimedia></Multimedia>
          <p className="Publicacion-parrafo">{Contenido}</p>
        </Container>
        <Container className="Publicar-comentario-apartado">
          <Form>
            <textarea className="Publicar-comentario-parrafo" />
            <Boton marginTop={0.5} marginLeft={0.1} width={15}>
              Comentar
            </Boton>
          </Form>
        </Container>
        <Container className="Publicaciones-comentarios">
          {comentarios}
        </Container>
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
            <h1>{saludar("juan")}</h1>
          </Container>
        </Row>
        <Row>
          <Container className="Publicaciones-feed">
            <Publicar></Publicar>
            <Container className="Publicaciones-vista">
              <h1 className="Publi">Publicaciones:</h1>
              {publicar("Publicación de acción", "La familia es primero", [
                comentario("el diablo manito"),
                comentario("wtf!!"),
                comentario("la esclavitud deberia ser legal."),
                comentario("me debes peso"),
              ])}
              {publicar("Publicación de terror", "Chucky da miedo")}
              {publicar("Publicación de humor", "El agua moja")}
            </Container>
          </Container>
        </Row>
      </Container>
    </>
  );
}
