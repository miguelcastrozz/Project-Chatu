import Container from "react-bootstrap/esm/Container";
import "../stylesheets/app.css";

export default function Publicacion({ ...props }) {
  return (
    <Container className="Publicacion_contenido">{props.children}</Container>
  );
}
