import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  // function handleStart() {
  //   setTimerStarted(true);
  //   timer.current = setTimeout(() => {
  //     setTimerExpired(true);
  //     dialog.current.open(); //dialog u açarken arka planı karartıyor
  //   }, targetTime * 1000);
  // }

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // Zaman kalmamışta zamanlayıcıyı sıfırlayıp kalan zamanı da hedeflenen zamana geri getirecek
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
    clearInterval(timer.current);
  }

  function handleStart() {
    //Butona tıkladıktan sonra her 10 milisaniyede bir çalışacak ve o anki kalan zamandan 10 milisaniye azaltacak
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  //Stop butonuna tıklayınca zamanlayıcıyı sıfırlayacak
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
    // clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running... " : "Timer is inactive"}
        </p>
      </section>
    </>
  );
}
