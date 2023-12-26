function Form() {
  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </label>
      <br />
      <label>
        Number:
        <input
          type="text"
          value={formData.number}
          onChange={(e) => handleInputChange("number", e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
