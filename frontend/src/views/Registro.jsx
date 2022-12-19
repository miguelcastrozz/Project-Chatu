import Container from "react-bootstrap/Container";
import Botones from "../components/Botones";
import IngresarTexto from "../components/IngresarTexto";
import Titulo from "../components/Titulo";

export default function Registro() {
  return (
    <>
      <Container className="Registro">
        <Titulo>¡Hola!</Titulo>
        <p>Nombre</p>
        <IngresarTexto></IngresarTexto>
        <p>Nombre de usuario</p>
        <IngresarTexto></IngresarTexto>
        <p>Email</p>
        <IngresarTexto type="email">Email </IngresarTexto>
        <p>Contraseña</p>
        <IngresarTexto type="password">Contraseña </IngresarTexto>
        <p>Año de nacimiento</p>
        <IngresarTexto type="year">año de nacimiento</IngresarTexto>
        <Botones width={40}>Crear Cuenta</Botones>
      </Container>
    </>
  );
}
