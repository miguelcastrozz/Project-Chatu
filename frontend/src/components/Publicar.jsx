import {Container, Form} from "react-bootstrap";

import Boton from "./Boton.jsx";
import IngresarTexto from "./IngresarTexto.jsx";

import "../stylesheets/app.css";

export default function Publicar() {
  return (
    <Container className="Publicar-formulario">
      <Form>
        <p>Titulo:</p>
        <IngresarTexto placeholder="Ingrese Un Titulo" height={2} />
        <p>Imagen:</p>
        <IngresarTexto type="file" className="Publicar-subir-contenido" />
        <p>contenido:</p>
        <textarea className="Publicar-publicacion-parrafo"/>
        <Boton type="submit" width={20}>
          Publicar
        </Boton>
      </Form>
    </Container>
  );
}
