import { useState } from "react";

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(() => 0);
    setStep(() => 1);
  }

  function handleCount(incOrDec) {
    if (incOrDec === "inc") {
      setCount((prevCount) => prevCount + step);
    } else {
      setCount((prevCount) => prevCount - step);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>Date Counter</div>

      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={handleCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(event) => setCount(Number(event.target.value))}
        />
        <button onClick={() => handleCount("inc")}>+</button>
      </div>

      {count === 0 ? (
        <p>{`Today is  ${date.toDateString()}`} </p>
      ) : count > 0 ? (
        <p>{`${count} days from date is ${date.toDateString()}`}</p>
      ) : (
        <p>{`${Math.abs(count)} days ago was ${date.toDateString()}`}</p>
      )}

      {(count !== 0 || step !== 1) && (
        <button onClick={handleReset}>RESET</button>
      )}
    </div>
  );
}

export default DateCounter;
