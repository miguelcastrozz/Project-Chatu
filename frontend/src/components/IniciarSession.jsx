import React from "react";
import "../style-sheets/forms.css"

export default function IniciarSession(props) {
  const { children } = props;
  return (
    <button className="button" > { children } </button>
  )
}
