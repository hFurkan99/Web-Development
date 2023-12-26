import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useField } from "formik";

function MyTextArea({ placeholder, name, label, height, ...props }) {
  const [field, meta] = useField(name);

  return (
    <Form.Group className="m-5">
      <FloatingLabel controlId="floatingInput" label={label} className="mb-3">
        <Form.Control
          as="textarea"
          {...field}
          {...props}
          placeholder={placeholder}
          style={{ height: `${height}px` }}
        />
        {meta.touched && meta.error ? (
          <div className="error text-danger mt-2">{meta.error}</div>
        ) : null}
      </FloatingLabel>
    </Form.Group>
  );
}

export default MyTextArea;
