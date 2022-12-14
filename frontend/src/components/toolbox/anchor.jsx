import "./componentcss/componentes.css";

export default function Anchor(props) {
  const { children, x, y } = props;
  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
  };

  return (
    <p className="Link" style={styles}>
      {children}
    </p>
  );
}
