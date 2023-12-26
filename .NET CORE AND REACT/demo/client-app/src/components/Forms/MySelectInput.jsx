import { useField } from "formik";
import { Form, Select } from "semantic-ui-react";
function MySelectInput({ placeholder, name, options }) {
  const [field, meta, helpers] = useField(name);

  return (
    <Form.Group className="m-5">
      <Select
        className="w-100"
        clearable
        options={options}
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <div className="error text-danger mt-2">{meta.error}</div>
      ) : null}
    </Form.Group>
  );
}

export default MySelectInput;
