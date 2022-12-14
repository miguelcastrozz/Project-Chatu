import React from "react";
import "./componentcss/subtitulo.css";

export default function Subtitulo(props) {
  const { children, x, y, saiz } = props;
  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
    fontSize: `${saiz}rem`,
  };

  return (
    <p className="subtitulo" style={styles}>
      {children}
    </p>
  );
}
