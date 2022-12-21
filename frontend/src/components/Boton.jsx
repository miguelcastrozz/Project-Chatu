import Button from "react-bootstrap/Button";

export default function Boton({ children, onClick, height, type, width}) {

  const styles = {
    width: `${width}rem`,
    height: `${height}rem`,
    margin: "0 auto",
  };

  return (
    <Button
      style={styles}
      type={type}
      variant="outline-primary"
      onClick={onClick}
    >
      {children}
    </Button>
  );

}
