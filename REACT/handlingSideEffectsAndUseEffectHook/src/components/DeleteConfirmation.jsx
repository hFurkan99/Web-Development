import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  //Zamanlayıcı başladıktan sonra sıfırlanmadığı için useEffect kullanılmalı.
  useEffect(() => {
    //Modalın 3 saniye sonra kapanması için.
    console.log("TIMER SET");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    // Return içindeki fonksiyon, useEffect fonksiyonu tekrar çalışmadan hemen önce ve bu komponentin render'ı bitmeden hemen önce çalışır.
    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    };
  }, [onConfirm]); //Dependency olarak fonksiyon eklemek sonsuz döngüye neden olabilir. useEffect'te dependency olarak fonksiyon kullanılacaksa parent komponentte dependency fonksiyonunun denk geldiği fonksiyon useCallback ile çevrilmelidir.

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
