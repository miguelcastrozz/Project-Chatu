import Container from "react-bootstrap/Container";
import Titulo from "../components/titulo";
import IngresarTexto from "../components/IngresarTexto";
import Botones from "../components/Botones";

export default function Login() {
  return (
    <Container className="Login">
      <Titulo>Hola de nuevo.</Titulo>
      <Container className="Login-mitad">
        <Container className="Login-usuario">
          <p>Usuario:</p>
          <IngresarTexto placeholder={"Usuario"} />
        </Container>
        <Container className="Login-contraseña">
          <p>Contraseña:</p>
          <IngresarTexto placeholder={"Contraseña"} type={"password"} />
        </Container>
      </Container>
      <Botones direccion="publications" width={30}>
        Iniciar sesión
      </Botones>
    </Container>
  );
}
