import Form from "react-bootstrap/Form";

export default function IngresarTexto({ ...props }) {
  const styles = {
    height: `${props.height}rem`,
  };

  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          style={styles}
          type={props.type}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className="p-2"
          aria-label="Search"
        />
      </Form>
    </div>
  );
}
