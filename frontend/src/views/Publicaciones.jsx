import BarradeNav from "../components/Barra";
import Publicar from "../components/Publicar";
import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import "../stylesheets/app.css";
import Publicacion from "../components/Publicacion";

export default function Publicaciones() {
  //inserte el nombre de usuario de la persona que ingreso
  function saludar(nombre) {
    return `Bienvenido, ${nombre}`;
  }

  // componente publicacion
  function publicar(titulo, Contenido) {
    return (
      <Publicacion>
        <h1>{titulo}</h1>
        <p className="parrafo">{Contenido}</p>
      </Publicacion>
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
              <h1 className="Publi">Publicaciones</h1>
              {publicar(
                "pepe el mago",
                "Mil y una historia me he inventado \n Para estar aquí, aquí a tu lado\n Y no te das cuenta que\nYo no encuentro ya qué hacer\nSé que piensas que no he sido sincero"
              )}
              {publicar("non", "me debe 300 lucas")}
              {publicar("UY ZONAS", "cuales!!!!!!!")}
            </Container>
          </Container>
        </Row>
      </Container>
    </>
  );
}
