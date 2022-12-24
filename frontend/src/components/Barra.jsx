import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";

import "../stylesheets/app.css";

import Logo from "../assets/logo.png";

export default function BarradeNav({...props}) {

  const Logo_style = {
    borderRadius: "100%",
    width: "4rem",
    marginTop: "1rem",
  };

  return (
    <Row>
      <Col>
        <Container className="Publicaciones-bar">
          <img src={Logo} alt="" style={Logo_style} />
          <p>Chatu</p>
        </Container>
      </Col>
      <Col></Col>
      <Col>
        <Row>
          <p>{props.name}</p>
        </Row>
        <Row></Row>
        <Container className="Perfil">{props.children}</Container>
        <Row></Row>
      </Col>
    </Row>
  );
  
}
