import UsuariosContext from "../context/UsuariosContext.jsx";
import Container from "react-bootstrap/esm/Container";

import {Form, Row} from "react-bootstrap";
import {useContext, useState} from "react";

import Boton from "../components/Boton.jsx";
import BarradeNav from "../components/Barra.jsx";
import Multimedia from "../components/multimedia";
import Publicar from "../components/Publicar.jsx";
import Publication from "../components/Publication.jsx";

import "../stylesheets/app.css";

export default function Publicaciones() {

  const {user, setUser} = useContext(UsuariosContext);
  const [publicaciones, setPublicaciones] = useState([]);

  const usuario = "Juan";

  async function traerPublicaciones() {
    try {
      const obtener = await fetch("http://localhost:8080/api/usuarios" + usuario);
      const publicaciones = await obtener.json(); /* Aquí se obtiene el JSON */
      setPublicaciones(publicaciones);    /* Actualiza el estado */
      /* const {nombre, nombre_usuario, correo, anio_nacimiento} = publicaciones; */
    } catch (e) {
      console.error("ERROR: " + e)
    }
  }

  function comentario(comentario) {
    return (
      <Container className="publicacion-comentario">
        <p className="publicacion-comentarios-caja">{comentario}</p>
      </Container>
    );
  }

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
            <h1>Bienvenido, {usuario}</h1>
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
            </Container>
          </Container>
        </Row>
      </Container>
    </>
  );
}
