import { Container, Form } from "react-bootstrap";
import Botones from "./Botones";
import IngresarTexto from "./IngresarTexto";
import "../stylesheets/app.css";

export default function Publicar() {
  return (
    <Container className="Publicar-formulario">
      <Form>
        <IngresarTexto placeholder="Ingrese su publicacion" height={8} />
        <Botones width={5}>Publicar</Botones>
      </Form>
    </Container>
  );
}
