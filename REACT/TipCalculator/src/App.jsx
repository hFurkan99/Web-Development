import { useState } from "react";
import TotalPrice from "./components/TotalPrice";
import Input from "./components/Input";

function App() {
  const [selectedValue, setSelectedValue] = useState({
    me: 0,
    friend: 0,
    bill: "",
  });

  function handleSelectValue(from, val) {
    setSelectedValue((prevValue) => ({
      ...prevValue,
      [from]: val,
    }));
  }

  function handleReset() {
    setSelectedValue(() => ({
      me: 0,
      friend: 0,
      bill: 0,
    }));
  }

  return (
    <div>
      <Input
        handleSelectValue={handleSelectValue}
        handleReset={handleReset}
        selectedValue={selectedValue}
      />
      <TotalPrice selectedValue={selectedValue} />
    </div>
  );
}

export default App;
