import "../../style-sheets/componentes.css";

export default function Titulo({ children, x, y, saiz }) {

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
    fontSize: `${saiz}rem`,
  };

  return <h1 style={styles}>{children}</h1>;

}
