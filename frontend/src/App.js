import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./style-sheets/root/global.css";
import "./style-sheets/root/reset.css";

import Inicio from "./views/Incio";

export default function App() {
  return (
      <div>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path ='*' element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>
      </div>
  );
}
