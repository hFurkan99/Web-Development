import { forwardRef } from "react";
const Inputs = forwardRef(function Inputs(
  { label, type, isTextArea, ...props },
  ref
) {
  //inputlara girdiğim refleri forward ref ile addingProject komponentine taşıdım.
  return (
    <div>
      <label className="add-project-label">{label}</label>
      {isTextArea ? (
        <textarea
          {...props} /* ...props'lar sayesinde buradaki komponent fonksiyonu parametresi içerisinde tanımlanmayan tüm propları bu alanda yayıp kullanabilirim.*/
          ref={ref}
          className="add-project-input"
          cols="50"
          rows="5"
        ></textarea>
      ) : (
        <input {...props} ref={ref} className="add-project-input" type={type} />
      )}
    </div>
  );
});

export default Inputs;
