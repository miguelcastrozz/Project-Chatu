import React from "react";
import { Route, Routes } from "react-router-dom";

import "./style-sheets/root/global.css";
import "./style-sheets/root/reset.css";

import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registro />}></Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  );
}
