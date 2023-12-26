import { useState } from "react";

function FlashCards({ questions }) {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId((prevSelectedId) => {
      if (prevSelectedId === id) return null;
      return id;
    });
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          className={question.id === selectedId ? "selected" : ""}
          key={question.id}
          onClick={() => handleClick(question.id)}
        >
          {question.id === selectedId ? question.answer : question.question}
        </div>
      ))}
    </div>
  );
}

export default FlashCards;
