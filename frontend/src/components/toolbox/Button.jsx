import "../../style-sheets/componentes.css";

export default function Button({ children, x, y, width }) {

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
    width: `${width}rem`,
  };

  return (
    <button className="button" style={styles}>
      {children}
    </button>
  );

}
