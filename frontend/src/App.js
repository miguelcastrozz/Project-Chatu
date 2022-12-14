import React from "react";
import {Link, Route, Routes} from "react-router-dom";

import "./style-sheets/root/global.css";
import "./style-sheets/root/reset.css";
import "./style-sheets/app.css";

import Inicio from "./views/Incio";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Publicaciones from "./views/Publicaciones";
import Comentarios from "./views/Comentarios";

export default function App() {
  return (
    <nav>
      <Link to="/"/>
      <Link to="/login"/>
      <Link to="/registro"/>
      <Link to="/publicaciones"/>
      <Link to="/comentarios"/>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/publicaciones" element={<Publicaciones />}></Route>
        <Route path="/comentarios" element={<Comentarios />}></Route>
      </Routes>
    </nav>
  );
}
