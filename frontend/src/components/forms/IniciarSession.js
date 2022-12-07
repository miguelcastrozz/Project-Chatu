import React from "react";
import "./forms.css"

export default function IniciarSession(props) {
  const { children } = props;
  return (
    <button className="button" > { children } </button>
  )
}
