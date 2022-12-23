import Container from "react-bootstrap/Container";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Boton from "../components/Boton";
import IngresarTexto from "../components/IngresarTexto";
import Titulo from "../components/Titulo";
import swal from 'sweetalert'

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
      swal(res.data)
      if (res.status === 200) {
        swal("BIENVENIDO A CHATU", "Donde las opiniones convergen", "success" )
        Redirection("/publications")
      }
    } catch (e) {
      swal("Oops!!","Correo y/o Contraseña Incorrectos.", "error")
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Container className="col-sm-7 offset-2 Login">
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
