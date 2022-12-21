import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../stylesheets/app.css";
import Logo from "../assets/logo.png";

export default function BarradeNav({ ...props }) {
  const Logo_style = {
    borderRadius: "100%",
    width: "3rem",
  };

  return (
    <Row>
      <Col>
        <Container className="Publicaciones-template">
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
