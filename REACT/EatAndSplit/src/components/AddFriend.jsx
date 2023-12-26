import { useState } from "react";
import MyTextInput from "./MyTextInput";

function AddFriend({ handleAddNewFriend }) {
  const [newFriend, setNewFriend] = useState({
    name: "",
    photo: "",
  });

  function handleChange(key, value) {
    setNewFriend((prevNewFriend) => ({
      ...prevNewFriend,
      [key]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleAddNewFriend(newFriend);
  }
  return (
    <form onSubmit={handleSubmit} className="form-add-friend">
      <MyTextInput
        label="name"
        handleChange={handleChange}
        value={newFriend.name}
      >
        🧑‍🤝‍🧑 Friend Name
      </MyTextInput>
      <br />
      <MyTextInput
        label="photo"
        handleChange={handleChange}
        value={newFriend.photo}
      >
        📸 Image URL
      </MyTextInput>
      <br />
      <button className="button">Add</button>
    </form>
  );
}

export default AddFriend;
