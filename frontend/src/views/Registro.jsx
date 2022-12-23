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
            nombre: nombre,
            nombre_usuario: usuario,
            correo: correo,
            anio_nacimiento: year,
            contrasenia: password,
          }
        })
      });
      swal('Bienvenid@ ' + nombre, 'Tu registro ha sido exitoso', 'success')
    } catch (e) {
      swal("Oops!", "Algo salió mal \n\n" + e.message, "error")
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

              <Titulo>¡Hola!</Titulo>

              <p>Nombre</p>
              <IngresarTexto onChange={(e) => setNombre(e.target.value)} />
              <hr className="mt-2"></hr>
              <p>Nombre de usuario </p>
              <IngresarTexto onChange={(e) => setUsuario(e.target.value)} />
              <hr className="mt-2"></hr>
              <p>E-mail </p>
              <IngresarTexto onChange={(e) => setCorreo(e.target.value)} />
              <hr className="mt-2"></hr>
              <p>Contraseña </p>
              <IngresarTexto onChange={(e) => setPassword(e.target.value)} type={"password"} />
              <hr className="mt-2"></hr>
              <p>Año de nacimiento </p>
              <IngresarTexto onChange={(e) => setYear(e.target.value)} />
              <hr className="mt-2" />
              <Boton>Crear Cuenta</Boton>
              <nombre />
            </Container>
          </div>
        </div>
      </div>
    </form>
  );
}
