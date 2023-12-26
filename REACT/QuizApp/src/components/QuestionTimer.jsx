import { useState, useEffect } from "react";

function QuestionTimer({ onTimeout, timeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    //Her remaining time güncellemesinde komponent renderlanacağı için timer sürekli set edilecek. Bu nedenle burda useEffect kullanılmalı.
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout); //Buradaki zaman dolduktan sonra onTimeout propu app komponentindeki handleSkipAnswer callBack fonksiyonunu tetikleyecek.

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]); //Bu komponent renderlandığında bir kez olacak şekilde ve dependency alanına yazılan proplardaki herhangi bir güncellemede çalışır.

  useEffect(() => {
    console.log("SETTING INTERVAL");

    //Her 100 milisaniyede bir state güncellemesi olduğu için bu komponent sürekli renderlanacak ve sürekli setinterval oluşturup sonsuz döngüye girecek. Bu nedenle useEffect kullanılmalı.
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []); //Sadece bu komponent renderlandığında ve en son çalşır.

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}

export default QuestionTimer;
