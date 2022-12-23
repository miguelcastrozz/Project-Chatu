import { Container, Form } from "react-bootstrap";
import Boton from "./Boton";
import IngresarTexto from "./IngresarTexto";
import "../stylesheets/app.css";

export default function Publicar() {
  return (
    <Container className="Publicar-formulario">
      <Form>
        <IngresarTexto height="15" placeholder="Ingrese su publicación"/>
        <hr className="mt-2" />
        <Boton>Publicar</Boton>
      </Form>
    </Container>
  );
}
