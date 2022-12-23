import {Route, Routes} from "react-router-dom";
import React from "react";
import "./stylesheets/root/global.css";
import "./stylesheets/root/reset.css";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Publicaciones from "./views/Publicaciones";
import Registro from "./views/Registro";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Registro />}/>
        <Route path="/publications" element={<Publicaciones />}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </div>
  );
}
