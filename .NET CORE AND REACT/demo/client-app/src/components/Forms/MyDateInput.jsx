import Form from "react-bootstrap/Form";
import { useField } from "formik";
import DatePicker from "react-datepicker";
function MyDateInput({ name, ...props }) {
  const [field, meta, helpers] = useField(name);
  return (
    <Form.Group className="m-5">
      <DatePicker
        name={name}
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => helpers.setValue(value)}
      />
      {meta.touched && meta.error ? (
        <div className="error text-danger mt-2">{meta.error}</div>
      ) : null}
    </Form.Group>
  );
}

export default MyDateInput;
