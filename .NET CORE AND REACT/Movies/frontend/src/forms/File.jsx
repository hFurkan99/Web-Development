import { useFormikContext } from "formik";
import { useState } from "react";

function File({ displayName, field }) {
  const [imageBase64, setImageBase64] = useState("");

  const { values } = useFormikContext();

  const divStyle = { marginTop: "10px" };
  const imgStyle = { width: "450px" };

  const handleOnChange = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        toBase64(file)
          .then((base64Representation) => setImageBase64(base64Representation))
          .catch((error) => console.log(error));
        values[field] = file;
      } else {
        setImageBase64("");
      }
    }
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="mt-4 ">
      <label htmlFor={field}>{displayName}</label>
      <div>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleOnChange}
        />
      </div>

      {imageBase64 ? (
        <div>
          <div style={divStyle}>
            <img style={imgStyle} src={imageBase64} alt="selected" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default File;
