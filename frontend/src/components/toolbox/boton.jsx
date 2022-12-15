import "./componentcss/componentes.css";
import { useNavigate } from "react-router-dom";

export default function Boton(props) {
  const { children, x, y, width, direccion } = props;
  const navigate = useNavigate();

  function redireccion() {
    navigate(`/${direccion}`);
    console.log("me has dado click.");
  }

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
    width: `${width}rem`,
  };

  return (
    <button className="boton" style={styles} onClick={redireccion}>
      {children}
    </button>
  );
}
