import { Container, Form } from "react-bootstrap";
import Boton from "./Boton";
import IngresarTexto from "./IngresarTexto";
import "../stylesheets/app.css";

export default function Publicar() {
  return (
    <Container className="Publicar-formulario">
      <Form>
        <IngresarTexto placeholder="Ingrese su publicacion" height={8} />
        <Boton width={5}>Publicar</Boton>
      </Form>
    </Container>
  );
}
