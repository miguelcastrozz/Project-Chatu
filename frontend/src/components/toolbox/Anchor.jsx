import "./../../style-sheets/componentes.css";
import { useNavigate } from "react-router-dom";

export default function Anchor(props) {
  const { children, x, y, direccion } = props;

  const navigate = useNavigate();

  function redireccion() {
    navigate(`/${direccion}`);
    console.log("me has dado click.");
  }

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
  };

  return (
    <p className="Link" style={styles} onClick={redireccion}>
      {children}
    </p>
  );
}
