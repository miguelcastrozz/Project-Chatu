import Container from "react-bootstrap/esm/Container";

import "../stylesheets/app.css";

export default function Publication({...props}) {
  return (
    <Container className="Publication_contenido">{props.children}</Container>
  );
}
