import React from "react";
import Button from "react-bootstrap/Button";

export default function Boton({...props}) {
  return (
    <div>
      <Button
        variant="outline-success"
      >{props.children}</Button>
    </div>
  )
}
