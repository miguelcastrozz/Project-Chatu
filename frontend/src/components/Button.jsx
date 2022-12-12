import React from "react";
import "../style-sheets/button.css"

export default function Button({ children }) {
  return (
    <button className="button" > { children } </button>
  )
}
