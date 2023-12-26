import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";
const Counter = () => {
  //dispatch fonksiyonu yine aynı isimli değişkene atandı.
  const dispatch = useDispatch();

  //store içerisindeki state.counter alındı
  //state'ten sonraki ilk counter -> configurestore içindeki reducer'ın keyi
  const counter = useSelector((state) => state.counter.counter);
  //useSelector kullanıldığı zaman redux otomatik olarak useSelector kullanılan komponente subscription(store için) veriyor. Redux store'da herhangi bir data değişikliğinde bu komponent de en son veriyi otomatik olarak alacak. Ve bu komponent fonksiyonu yeniden çalışacak. (Redux store'da state değişimi bu komponentin yeniden renderına sebebiyet verir.)

  //store içerisindeki state.showCounter alındı.
  //state'ten sonraki ilk counter -> configurestore içindeki reducer'ın keyi
  const show = useSelector((state) => state.counter.showCounter);

  //counterSlice içerisindeki increment reducer fonskiyonu çağrıldı
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  //azaltma işlemi
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  //Sayıyı 15 arttır
  const increaseHandler = () => {
    dispatch(counterActions.increase(15)); // {type: SOME_UNIQUE_IDENTIFER, payload: 15} //payload basic olarak otomatik oluşturuluyor. Eğer fonskiyon içine sadece bir adet argüman girildiyse. Argümana obje de girilebilirdi.
  };

  //Counter aç kapat
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      {show && <div className="value">{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 15</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
