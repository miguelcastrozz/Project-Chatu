import Container from "react-bootstrap/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        swal("BIENVENIDO A CHATU", "Donde las opiniones convergen", "success")
        Redirection("/publications")
      }
    } catch (e) {
      swal("Oops!!", "Correo y/o Contraseña Incorrectos.", "error")
      /*solo prueba eliminar
      Redirection("/publications")*/
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Container className="col-sm-8 offset-2 Login">

        <Container className="Publicaciones-navbar">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Container>

        <Titulo>👋 Hola de nuevo</Titulo>
        <Container className="Login-mitad">
          <Container className="Login-usuario">
            <p>Email</p>
            <IngresarTexto onChange={(e) => setCorreo(e.target.value)} type="email"></IngresarTexto>
          </Container>
          <Container className="Login-contraseña">
            <p>Contraseña</p>
            <IngresarTexto onChange={(e) => setPassword(e.target.value)} type={"password"} />
          </Container>
        </Container>
        <hr className="mt-2" />
        <Boton type="submit">Ingresar</Boton>
      </Container>
    </form>
  );

}

