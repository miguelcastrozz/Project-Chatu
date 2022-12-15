import "../../../style-sheets/app.css";

export default function Cajas(props) {
  const { x, y, width, height, color } = props;

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
    width: `${width}rem`,
    height: `${height}rem`,
    backgroundColor: `${color}`,
  };

  return <div className="cajas" style={styles}></div>;
}
