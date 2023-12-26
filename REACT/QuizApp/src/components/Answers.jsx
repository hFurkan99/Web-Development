import { useRef } from "react";
function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    // Bu işlem hala ekranda gösterilecek soru varsa yapılmalı. Eğer tüm sorular bittikten sonra sonuç ekranı dönen yerden önce kullanılırsa QUESTION indeksindde yazan indekste soru bulunamayacağı için hata verecektir. Ama sonuç ekranından sonra bu işlem yapılırsa zaten bu sayfa renderında sonuç ekranı döneceği için bu kısımdan sonraki hiçbir kod çalışmayacak.
    //Orijinal dizide ilk index doğru cevap olduğu için bu diziyi başka bir değişkene kopyaladım.
    shuffledAnswers.current = [...answers];
    //Cevapların sıralamasını değştirmek için sort metodu kullandım. Math.random'dan dönen değer 0.5'ten büyük olursa pozitif bir değer dönecek ve karşılaşan iki indeks aynı sıralamada kalacak, Math.random 0.5'ten küçük bir değer alırsa dönen değer negatif olacak ve iki indeks arasındaki sıralama değişecek.
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer; //Kullanıcının son seçtiği cevap bu cevapsa true
        let cssClass = "";

        //Cevap verilmişse ve verilen cevap için tıklanan buton bu buton ise
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
