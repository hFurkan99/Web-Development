import { useState, useEffect } from "react";
import "jspanel4/es6module/extensions/modal/jspanel.modal";
import "jspanel4/dist/jspanel.min.css";
import { jsPanel } from "jspanel4";
function Modal({ handleModal }) {
  const [formData, setFormData] = useState({ name: "", number: "" });

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldName === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini kullanarak istediğiniz işlemleri gerçekleştirin
    console.log("Form Data:", formData);
    handleModal(false);
  };

  useEffect(() => {
    let forms = `<form>
      <label>
        Name:
        <input 
          id="inputName"
          type="text"
          value="${formData.name}"
        />
      </label>
      <br />
      <label>
        Number:
        <input
          id="inputNumber"
          type="text"
          value="${formData.number}"  
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>`;

    let dForm = document.createRange().createContextualFragment(forms);

    const inputName = dForm.querySelector("#inputName");
    const inputNumber = dForm.querySelector("#inputNumber");
    const form = dForm.querySelector("form");

    inputName.addEventListener("change", (e) =>
      handleInputChange("name", e.target.value)
    );

    inputNumber.addEventListener("change", (e) =>
      handleInputChange("number", e.target.value)
    );

    form.addEventListener("submit", handleSubmit);

    // jsPanel'ı başlat
    const panel = jsPanel.create({
      theme: "primary",
      headerTitle: "Creating A Polygon",
      content: dForm,
    });

    // Bileşen kaldırıldığında jsPanel'ı temizle
    return () => {
      panel.close();
    };
  }, [formData]);

  return <div></div>; // createRoot kullanıldığında, render yapmaya gerek yok
}

export default Modal;
