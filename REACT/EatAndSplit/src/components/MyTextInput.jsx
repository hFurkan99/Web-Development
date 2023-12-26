function MyTextInput({ children, value, handleChange, label }) {
  return (
    <div>
      <label>{children}</label>
      <input
        value={value}
        onChange={(event) => handleChange(label, event.target.value)}
        type="text"
      />
    </div>
  );
}

export default MyTextInput;
