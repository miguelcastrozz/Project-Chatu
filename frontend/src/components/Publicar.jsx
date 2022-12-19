import { Container, Form } from "react-bootstrap";
import Botones from "./Botones";
import IngresarTexto from "./IngresarTexto";

export default function Publicar() {
  return (
    <Container>
      <Form>
        <IngresarTexto></IngresarTexto>
        <Botones>Publicar</Botones>
      </Form>
    </Container>
  );
}
