
import Form from "react-bootstrap/Form";

export default function IngresarTexto({ ...props}) {

  const style = {

  }
  return (
    <div>
      <Form className="d-flex">
        <Form.Control

          type={props.type}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className="me-2"
          aria-label="Search"
        />

      </Form>
    </div>
  );
}
