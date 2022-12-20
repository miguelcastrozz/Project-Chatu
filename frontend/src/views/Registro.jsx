import {useState} from "react";
import Container from "react-bootstrap/Container";
import Botones from "../components/Botones";
import IngresarTexto from "../components/IngresarTexto";
import Titulo from "../components/Titulo";

import { useState } from "react";

const nombre = "Ingrse un nombre para reconocerlo";
const nombreDUsuario = "Ingrese un nombre de usuario";
const correo = "Ingrese su correo";
const contraseña = "Ingrese una contraseña";

export default function Registro() {
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const respuesta = await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json", /* Enviamos un json */
        },
        body: JSON.stringify({
          usuario: {
            nombre: nombre,
            nombre_usuario: usuario,
            correo: correo,
            anio_nacimiento: anio,
            contrasenia: password,
          }
        })
      });
      alert("✅" + respuesta)
    } catch (e) {
      alert("❌" + e.message)
    }
  }

  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [anio, setAnio] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <Container className="Registro">
        <Titulo>¡Hola!</Titulo>
        <p>Nombre</p>
        <IngresarTexto onChange={(e) => setNombre(e.target.value)}></IngresarTexto>
        <p>Nombre de usuario</p>
        <IngresarTexto onChange={(e) => setUsuario(e.target.value)}></IngresarTexto>
        <p>Email</p>
        <IngresarTexto onChange={(e) => setCorreo(e.target.value)} type="email">Email </IngresarTexto>
        <p>Contraseña</p>
        <IngresarTexto onChange={(e) => setPassword(e.target.value)} type="password">Contraseña </IngresarTexto>
        <p>Año de nacimiento</p>
        <IngresarTexto onChange={(e) => setAnio(e.target.value)} type="year">año de nacimiento</IngresarTexto>
        <Botones width={40}>Crear Cuenta</Botones>
      </Container>
    </form>
  );
}
