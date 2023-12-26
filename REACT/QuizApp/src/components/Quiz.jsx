import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  //Bu değer sadece Question componenti içerisinde güncellenecek ve cevaplanacak soru her zaman olacak çünkü cevabın kontrolü Question komponenti içerisinde yapılacak
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  //Tıklanan butona göre cevaplar dizisine tıklanan cevabı ekleme.
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);
  //useCallback kullanılmayan durumda: App komponenti her renderlanığında buradaki fonksiyon çalışacak.
  //useCallback kullanılan durumda: Buradaki callback fonskiyonu sadece handleSelectAnswer fonksiyonu çalıştığı zaman çalışacak.
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null), //Timer fonskiyonun tetiklenmesi sonucu buradaki callback fonksiyonu da tetiklenecek ve cevap seçilmediyse cevap dizinine boş string eklenecek.
    [handleSelectAnswer] //handleSelectAnswer her çağırıldığında bu callback fonksiyonu yeniden oluşturulur.
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        /* Aktif soru değiştiğinde bu komponent baştan oluşturulacak*/
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
