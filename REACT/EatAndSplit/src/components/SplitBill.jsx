import { useState } from "react";
import MySelectInput from "./MySelectInput";
import MyTextInput from "./MyTextInput";

function SplitBill({ selectedFriend, handleSplitBill }) {
  const [splitBill, setSplitBill] = useState({
    bill: "",
    yours: "",
    friends: "",
    who: "you",
  });

  function handleChange(key, value) {
    setSplitBill((prevSplitBill) => ({
      ...prevSplitBill,
      [key]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(splitBill);
    handleSplitBill(splitBill);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="form-split-bill">
        <h3>Split A Bill With {selectedFriend.name}</h3>
        <br />
        <MyTextInput
          label="bill"
          handleChange={handleChange}
          value={splitBill.bill}
        >
          💰 Bill Value
        </MyTextInput>
        <br />

        <MyTextInput
          label="yours"
          handleChange={handleChange}
          value={splitBill.yours}
        >
          Your expense
        </MyTextInput>
        <br />

        <MyTextInput
          label="friends"
          handleChange={handleChange}
          value={splitBill.friends}
        >
          {selectedFriend.name}&apos;s expense
        </MyTextInput>
        <br />

        <MySelectInput
          label="who"
          value={splitBill.who}
          handleChange={handleChange}
          selectedFriend={selectedFriend}
        >
          🤑 Who is paying the bill?
        </MySelectInput>
        <button className="button">Split Bill</button>
      </form>
    </>
  );
}

export default SplitBill;
