import "./componentcss/componentes.css";

export default function Boton(props) {
  const { children, x, y, width } = props;
  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
    width: `${width}rem`,
  };

  return (
    <button className="boton" style={styles}>
      {children}
    </button>
  );
}
