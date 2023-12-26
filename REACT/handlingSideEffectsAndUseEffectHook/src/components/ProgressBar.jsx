import { useState, useEffect } from "react";

function ProgressBar({ timer }) {
  //Bu komponent tekrar renderlandığı zaman bu state kalan zamanı 3000'e geri getirecek.
  const [remainingTime, setRemainingTime] = useState(timer);

  //Progress barın değeri modal pencere açıldığında yani renderlandığında bir kez tetiklenecek ve modal kapandığında baştan başlayacak. Silmek için mekan seçildiğinde bu komponent renderlandığı zaman tekrar baştan başlayıp kullanıcı silmeyi onaylayana kadar ya da 3 saniye sonunda sıfırlanacak. DeleteConfirmation komponenti tekrar tekrar renderlanmasın diye progress barı ayrı bir komponente taşıdım.
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("Cleaning up timer.");
      clearInterval(interval); //
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
}

export default ProgressBar;
