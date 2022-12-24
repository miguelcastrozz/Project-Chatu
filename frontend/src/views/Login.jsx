import {useContext, useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

import Container from "react-bootstrap/Container";

import Boton from "../components/Boton.jsx";
import IngresarTexto from "../components/IngresarTexto.jsx";
import Titulo from "../components/Titulo.jsx";
import TokenContext from "../context/TokenContext";

export default function Login() {
  
  const {setToken} = useContext(TokenContext);
  const Redirection = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies(["token", "user"]);

  async function onSubmit(e) { 
    e.preventDefault();
    try {
      const doc = await fetch("http://localhost:8080/api/login", {
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
            contrasenia: password,
          },
        })
      });
      const resp = await doc.json();
      setToken(resp.token);
      if (doc.status === 200) {
        alert("✅ BIENVENIDO A CHATU");
        setCookies("token", setToken, {path: "/"});
        Redirection("/publications");
      } else {
        alert("❌ Correo y/o Contraseña Incorrectos.");
      }
    } catch (e) {
      alert("❌ " + e.message);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Container className="Login">
        <Titulo>👋 Hola de nuevo</Titulo>
        <Container className="Login-mitad">
          <Container className="Login-usuario">
            <p>Email</p>
            <IngresarTexto
              onChange={(e) => setCorreo(e.target.value)}
              type="email"
            ></IngresarTexto>
          </Container>
          <Container className="Login-contraseña">
            <p>Contraseña</p>
            <IngresarTexto
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
            />
          </Container>
        </Container>
        <Boton type="submit" width={30}>
          Iniciar sesión
        </Boton>
      </Container>
    </form>
  );
}
