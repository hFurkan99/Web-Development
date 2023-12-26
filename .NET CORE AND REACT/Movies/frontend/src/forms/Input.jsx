import { ErrorMessage, Field } from "formik";

function Input({ displayName, field }) {
  return (
    <div>
      <label htmlFor={field}>
        <div>{displayName}</div>
        <Field name={field} id={field} /> <br />
        <ErrorMessage name={field} component="small" />
      </label>
    </div>
  );
}

export default Input;
