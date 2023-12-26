import MySelect from "./MySelect";

function Input({ handleSelectValue, selectedValue, handleReset }) {
  return (
    <form>
      <label htmlFor="bill">How much was the bill?</label>
      <input
        placeholder="Bill"
        value={selectedValue.bill}
        onChange={(event) =>
          handleSelectValue("bill", Number(event.target.value))
        }
        type="text"
        name="bill"
      />
      <br />
      <MySelect
        label="me"
        selectedValue={selectedValue}
        handleSelectValue={handleSelectValue}
      >
        How did you like the service?
      </MySelect>
      <MySelect
        label="friend"
        selectedValue={selectedValue}
        handleSelectValue={handleSelectValue}
      >
        How did your friend like the service?
      </MySelect>
      <br />
      {selectedValue.bill !== 0 && (
        <button onClick={handleReset} type="button">
          Reset
        </button>
      )}
    </form>
  );
}

export default Input;
