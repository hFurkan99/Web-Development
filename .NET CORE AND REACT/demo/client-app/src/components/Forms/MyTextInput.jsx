import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useField } from "formik";

function MyTextInput({ placeholder, name, label, ...props }) {
  const [field, meta] = useField(name);

  return (
    <Form.Group className="m-5" id="text-input">
      <FloatingLabel controlId="floatingInput" label={label} className="mb-3">
        <Form.Control
          type="text"
          {...field}
          {...props}
          placeholder={placeholder}
        />
        {meta.touched && meta.error ? (
          <div className="error text-danger mt-2">{meta.error}</div>
        ) : null}
      </FloatingLabel>
    </Form.Group>
  );
}

export default MyTextInput;
