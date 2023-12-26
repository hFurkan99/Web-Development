import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

import { useState } from "react";

function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    //Task girilmemişse alttaki fonksiyonlar çalışmadan hemen boş değer dödür.
    if (enteredTask.trim() === "") {
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <Stack className="mb-5 mt-4 " direction="horizontal" gap={3}>
      <Form.Control
        className="me-auto"
        placeholder="Add your task here..."
        onChange={handleChange}
        value={enteredTask}
      />
      <Button onClick={handleClick} variant="success">
        Submit
      </Button>
    </Stack>
  );
}

export default NewTask;
