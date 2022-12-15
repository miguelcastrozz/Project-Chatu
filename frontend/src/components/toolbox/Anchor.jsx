import "./../../style-sheets/componentes.css";
import { useNavigate } from "react-router-dom";

export default function Anchor({children, direccion, x, y}) {

  const navigate = useNavigate();

  function redirect() {
    navigate(`/${direccion}`);
    console.log("me has dado click.");
  }

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
  };

  return (
    <p className="Link" style={styles} onClick={redirect}>
      {children}
    </p>
  );

}
