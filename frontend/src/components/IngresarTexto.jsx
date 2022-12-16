import { Children } from "react";
import Form from "react-bootstrap/Form";

export default function IngresarTexto({ ...props }) {
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </div>
  );
}
