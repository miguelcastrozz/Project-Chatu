import { useState } from "react";
import Container from "react-bootstrap/Container";
import Boton from "./../components/Boton";
import IngresarTexto from "../components/IngresarTexto";
import Titulo from "../components/Titulo";
import swal from 'sweetalert'

export default function Registro() {
  async function onSubmit(e) {
    e.preventDefault();
    try {
      await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: {
            nombre: nombre.toUpperCase,
            nombre_usuario: usuario,
            correo: correo,
            anio_nacimiento: year,
            contrasenia: password,
          }
        })
      });
      swal('Bienvenid@ ' + nombre, 'Tu registro ha sido exitoso', 'success')
    } catch (e) {
      swal("Oops!", "Algo salió mal " + e.message, "error")
    }
  }

  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [year, setYear] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-3">
            <Container className="Registro">
              <Titulo>¡Hola!</Titulo>
              <p>Nombre</p>
              <IngresarTexto onChange={(e) => setNombre(e.target.value)}></IngresarTexto>
              <hr className="mt-2"></hr>
              <p>Nombre de usuario </p>
              <IngresarTexto onChange={(e) => setUsuario(e.target.value)}></IngresarTexto>
              <hr className="mt-2"></hr>
              <p>E-mail </p>
              <IngresarTexto onChange={(e) => setCorreo(e.target.value)}></IngresarTexto>
              <hr className="mt-2"></hr>
              <p>Contraseña </p>
              <IngresarTexto onChange={(e) => setPassword(e.target.value)} type={"password"}></IngresarTexto>
              <hr className="mt-2"></hr>
              <p>Año de nacimiento </p>
              <IngresarTexto onChange={(e) => setYear(e.target.value)}></IngresarTexto>
              <hr className="mt-2"></hr>
              <Boton>Crear Cuenta</Boton>
              <nombre/>
            </Container>
          </div>
        </div>
      </div>
    </form>
  );
}
