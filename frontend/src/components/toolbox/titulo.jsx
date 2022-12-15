import "./componentcss/componentes.css";

export default function Titulo(props) {
  const { children, x, y, saiz, longitud } = props;

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
    fontSize: `${saiz}rem`,
    width: `${longitud}rem`,
  };

  return <h1 style={styles}>{children}</h1>;
}
