import { useState } from "react";
import MyButton from "./MyButton";
import StepMessage from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  }
  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        X
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage>
            Step {step} : {messages[step - 1]}
            <div className="buttons">
              <MyButton
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
                style={{
                  backgroundColor: " #95adf2",
                  color: "#fff",
                  marginTop: "15px",
                }}
              >
                Learn how
              </MyButton>
            </div>
          </StepMessage>

          <div className="buttons">
            <MyButton
              onClick={handlePrevious}
              style={{ backgroundColor: " #7950f2", color: "#fff" }}
            >
              👈 Previous
            </MyButton>
            <MyButton
              onClick={handleNext}
              style={{ backgroundColor: " #7950f2", color: "#fff" }}
            >
              Next 👉
            </MyButton>
          </div>
        </div>
      )}
    </>
  );
}

export default Steps;
