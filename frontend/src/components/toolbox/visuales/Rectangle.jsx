export default function Rectangle({ x, y, width, height, color }) {

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
    width: `${width}rem`,
    height: `${height}rem`,
    backgroundColor: `${color}`,
  };

  return <div className="cajas" style={styles}></div>;

}
