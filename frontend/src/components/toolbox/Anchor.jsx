import "../../style-sheets/componentes.css";

export default function Anchor({ children, x, y }) {

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
  };

  return (
    <p className="Link" style={styles}>
      {children}
    </p>
  );

}
