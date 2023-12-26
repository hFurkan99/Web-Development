function MySelectInput({
  selectedFriend,
  children,
  handleChange,
  value,
  label,
}) {
  return (
    <>
      <label>{children}</label>
      <select
        value={value}
        onChange={(event) => handleChange(label, event.target.value)}
      >
        <option value="you">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
    </>
  );
}

export default MySelectInput;
