import BarradeNav from "../components/Barra.jsx";
import Publicar from "../components/Publicar.jsx";
import Container from "react-bootstrap/esm/Container";
import { Form, Row } from "react-bootstrap";
import "../stylesheets/app.css";
import Multimedia from "../components/multimedia";
import Publication from "../components/Publication.jsx";
import Boton from "../components/Boton.jsx";

export default function Publicaciones() {
  // Inserte el nombre de usuario de la persona que ingreso

  function saludar(nombre) {
    return `Bienvenido, ${nombre}`;
  }

  function comentario(comentario){
     return(
          <Container className = "publicacion-comentario">

          </Container>
     )
  }

  // Componente publication
  function publicar(titulo, Contenido) {
    return (
      <Publication>
        <h1>{titulo}</h1>
        <Multimedia></Multimedia>
        <p className="Publicacion-parrafo">{Contenido}</p>
        <Form className = "Publicar-comentario-apartado">
          <textarea className="Publicar-comentario-parrafo" />
          <Boton marginTop={0.5} marginLeft = {3}>Comentar</Boton>
        </Form>

        <Container className="Publicaciones-comentarios">

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
