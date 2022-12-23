import "../stylesheets/app.css";
import Container from "react-bootstrap/Container";
import Boton from "../components/Boton";
import Titulo from "../components/Titulo";
import Subtitulo from "../components/Subtitulo";
import Vinculo from "../components/Vinculo";
import { useNavigate } from "react-router-dom";

export default function Inicio() {

  const navigate = useNavigate();

  function redirection() {
    navigate("/login")
  }

  return (
    <>
      <Container className="Inicio">
        <Container className="Inicio-arriba">
          <Titulo>Bienvenido a Chatu</Titulo>
          <Subtitulo>Donde las opiniones convergen</Subtitulo>
        </Container>
        <Container className="Inicio-medio">
          <Boton className="Inicio-boton" onClick={redirection} >Iniciar sesión</Boton>
        </Container>
        <Container className="Inicio-abajo">
          <p>¿Eres nuevo en Chatu?</p>
        </Container>
        <div className="text-center">
            <Vinculo direccion="register">Click aquí</Vinculo>
        </div>
      </Container>
    </>
  );
}
