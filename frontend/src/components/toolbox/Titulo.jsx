import "../../style-sheets/componentes.css";

export default function Titulo({children, longitud, saiz, x, y,}) {

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
    fontSize: `${saiz}rem`,
    width: `${longitud}rem`,
  };

  return <h1 style={styles}>{children}</h1>;

}
