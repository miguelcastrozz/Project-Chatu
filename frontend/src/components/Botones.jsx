import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Botones({ children, direccion, width }) {
  const navigate = useNavigate();

  const styles = {
    width: `${width}rem`,
  };

  function redirigir() {
    navigate(`/${direccion}`);
  }

  return (
    <Button style={styles} variant="outline-primary" onClick={redirigir}>
      {children}
    </Button>
  );
}
