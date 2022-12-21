import Container from "react-bootstrap/Container";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Boton from "../components/Boton";
import IngresarTexto from "../components/IngresarTexto";
import Titulo from "../components/Titulo";

export default function Login() {

  const Redirection = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          login: {
            correo: correo,
            contrasenia: password
          }
        })
      });
      alert(res.data)
      if (res.status === 200) {
        alert("✅ BIENVENIDO A CHATU")
        Redirection("/publications")
      } else {
        alert("❌ Correo y/o Contraseña Incorrectos.") /* TODO - Eliminar mensajes adicionales */
      }
    } catch (e) {
      alert("❌ " + e.message)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Container className="Login">
        <Titulo>👋 Hola de nuevo</Titulo>
        <Container className="Login-mitad">
          <Container className="Login-usuario">
            <p>Email</p>
            <IngresarTexto onChange={(e) => setCorreo(e.target.value)} type="email"></IngresarTexto>
          </Container>
          <Container className="Login-contraseña">
            <p>Contraseña</p>
            <IngresarTexto onChange={(e) => setPassword(e.target.value)} type={"password"}/>
          </Container>
        </Container>
        <Boton type="submit" width={30}>Iniciar sesión</Boton>
      </Container>
    </form>
  );

}
