import {useState} from "react";
import Container from "react-bootstrap/Container";
import Botones from "../components/Botones";
import IngresarTexto from "../components/IngresarTexto";
import Titulo from "../components/Titulo";

export default function Login() {

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const respuesta = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json", /* Enviamos un json */
        },
        body: JSON.stringify({
          login: {
            correo: correo,
            contrasenia: password
          }
        })
      });
      alert("✅" + respuesta.status)
    } catch (e) {
      alert("❌" + e.message)
    }
  }

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <Container className="Login">
        <Titulo>👋 Hola de nuevo.</Titulo>
        <Container className="Login-mitad">
          <Container className="Login-usuario">
            <p>Email</p>
            <IngresarTexto onChange={(e) => setCorreo(e.target.value)} type="email"></IngresarTexto>
          </Container>
          <Container className="Login-contraseña">
            <p>Contraseña:</p>
            <IngresarTexto onChange={(e) => setPassword(e.target.value)} type={"password"}/>
          </Container>
        </Container>
        <Botones
          type="submit"
          width={30}>
          Iniciar sesión
        </Botones>
      </Container>
    </form>
  );

}
