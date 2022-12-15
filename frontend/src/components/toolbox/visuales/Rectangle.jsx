import "../../../style-sheets/app.css";

export default function Cajas({color, height, width, x, y}) {

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
    width: `${width}rem`,
    height: `${height}rem`,
    backgroundColor: `${color}`,
  };

  return <div className="cajas" style={styles}></div>;

}
