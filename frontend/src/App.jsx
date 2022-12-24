import {Route, Routes} from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import React from "react";
import "./stylesheets/root/global.css";
import "./stylesheets/root/reset.css";
import Inicio from "./views/Inicio.jsx";
import Login from "./views/Login.jsx";
import Publicaciones from "./views/Publicaciones.jsx";
import Registro from "./views/Registro.jsx";
import { TokenProvider } from "./context/TokenContext";
import { UsuariosContextProvider } from "./context/UsuariosContext";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/login" element={<CookiesProvider><TokenProvider><Login /></TokenProvider></CookiesProvider>}></Route>
        <Route path="/register" element={<Registro />}></Route>
        <Route path="/publications" element={<CookiesProvider><TokenProvider><Publicaciones /></TokenProvider></CookiesProvider>}></Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  );
}
