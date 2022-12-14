//Este es el componente para poner titutlos
import "./componentcss/titulo.css";

export default function Titulo(props) {
  const { children, x, y, saiz } = props;

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
    fontSize: `${saiz}rem`,
  };

  return <h1 style={styles}>{children}</h1>;
}
