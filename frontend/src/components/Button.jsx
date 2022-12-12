import React from "react";
import "../style-sheets/buton.css"

export default function Button({ children }) {
  return (
    <button className="button" > { children } </button>
  )
}
