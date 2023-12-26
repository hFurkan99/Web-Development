import { ErrorMessage, Field } from "formik";

function Textarea({ displayName, field }) {
  return (
    <label htmlFor={field}>
      <div>{displayName}</div>
      <Field as="textarea" name={field} id={field} /> <br />
      <ErrorMessage name={field} component="small" />
    </label>
  );
}

export default Textarea;
