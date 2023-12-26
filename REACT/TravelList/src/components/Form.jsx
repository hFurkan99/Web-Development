import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(event) {
    event.preventDefault();

    if (!name) return;
    const newItem = {
      id: Date.now(),
      name,
      quantity,
      packed: false,
    };

    onAddItem(newItem);
    console.log(newItem);
    setName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>
      <select
        value={quantity}
        onChange={(event) => {
          setQuantity((prevQuantity) => {
            prevQuantity = Number(event.target.value);
            return prevQuantity;
          });
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={name}
        onChange={(event) => {
          setName((prevName) => {
            prevName = event.target.value;
            return prevName;
          });
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
