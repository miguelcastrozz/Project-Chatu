import BarradeNav from "../components/barra";
import Publicar from "../components/Publicar";
import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import "../stylesheets/app.css";

export default function Publicaciones() {
  function saludar(nombre) {
    return `Bienvenido, ${nombre}`;
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
          
          <Container className = "Publicaciones-feed">
          <Publicar></Publicar>
          <Container className = "Publicaciones-vista">

          </Container>

          </Container>
        </Row>
      </Container>
    </>
  );
}
