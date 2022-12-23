import Button from "react-bootstrap/Button";

export default function Boton({ children, onClick, height, type, width, marginTop, marginLeft}) {

  const styles = {
    width: `${width}rem`,
    height: `${height}rem`,
    margin: `${marginTop}rem ${marginLeft}rem`
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
