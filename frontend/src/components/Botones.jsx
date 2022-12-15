import Button from "react-bootstrap/Button";

export default function Botones({ children }) {
  const styles = {
    margin: "0px auto",
  };

  return (
    <Button style={styles} variant="outline-primary">
      {children}
    </Button>
  );
}
