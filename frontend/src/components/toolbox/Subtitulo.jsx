import "../../style-sheets/componentes.css";

export default function Subtitulo({children, saiz, x, y}) {

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
