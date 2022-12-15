import { Form } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Texto(props) {
  const { x, y, archtype, width, height, children } = props;

  const styles = {
    transform: `translate(${x}rem,${y}rem)`,
  };

  const pStyles = {
    color: "white",
    fontSize: "1rem",
    fontFamily: "sans-serif",
  };

  const fStyles = {
    width: `${width}rem`,
    height: `${height}rem`,
  };

  return (
    <div style={styles}>
      <Form.Label style={pStyles}>{children}</Form.Label>
      <br />
      <br />
      <Form.Control style={fStyles} type={archtype} />;
    </div>
  );
}
