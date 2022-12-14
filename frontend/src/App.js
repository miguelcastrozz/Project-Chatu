import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./style-sheets/root/global.css";
import "./style-sheets/root/reset.css";
import Landing from "./components/landing/landingPage";

export default function App() {
  return (
    <nav>
      <Link to="/" />
      <Link to="/login" />
      <Link to="/registro" />
      <Link to="/publicaciones" />
      <Link to="/comentarios" />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/publicaciones" element={<Publicaciones />}></Route>
        <Route path="/comentarios" element={<Comentarios />}></Route>
      </Routes>
    </nav>
  );
}
