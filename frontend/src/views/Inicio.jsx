import "../stylesheets/app.css";
import Container from "react-bootstrap/Container";
import Boton from "../components/Boton.jsx";
import Titulo from "../components/Titulo.jsx";
import Subtitulo from "../components/Subtitulo.jsx";
import Vinculo from "../components/Vinculo.jsx";
import { useNavigate } from "react-router-dom";

export default function Inicio() {

  const navigate = useNavigate();

  function redirection(){
      navigate("/login")
  }

  return (
      <Container className="Inicio">
        <Container className="Inicio-arriba">
          <Titulo width="20">Bienvenido a Chatu</Titulo>
          <Subtitulo>Donde las opiniones convergen</Subtitulo>
        </Container>
        <Container className="Inicio-medio">
          <Boton className="Inicio-boton" onClick={redirection} width="25">Iniciar sesión</Boton>
        </Container>
        <Container className="Inicio-abajo">
          <p>¿Eres nuevo en Chatu?</p>
          <Vinculo direccion="register" > Clickea aquí. </Vinculo>
        </Container>
      </Container>
  );
}
