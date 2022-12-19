import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Botones({children, direccion, onClick, type, width}) {

  const navigate = useNavigate();

  const styles = {
    width: `${width}rem`,
  };

  function redirigir() {
    navigate(`/${direccion}`);
  }

  return (
    <Button
      style={styles}
      type={type}
      variant="outline-primary"
      onClick={onClick}>
    {children}</Button>
  );

}
