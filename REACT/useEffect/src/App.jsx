
import './App.css'
import { useState, useEffect } from 'react';
function App() {

  const [furkan, setFurkan] = useState(0);
  const [BALTACI, setBALTACI] = useState(0);

  // App.jsx ilk başta render edildiğinde(çağrıldığında) ya da içerisindeki statelerin herhangi birinde bir değişiklik olduğu anda içindeki kod çalışır
  useEffect(() => {
    console.log("Her zaman çalışır")
  })

  // Yalnızca App.jsx ilk defa çağrıldığında çalışır
  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır daha da çalışmaz")
  }, [])

  //  Komponent (App.jsx) ilk renderlandığında(çağrıldığında) çalışır. Ek olarak köşeli parantez içindeki state değerleri (furkan, beguhan,..vb.) değiştiğinde çalışır 
  useEffect(() => {
    console.log("İlk kez renderlandığında çalışır + furkan değerinde bir değişiklik olduğunda")
  }, [furkan])
  useEffect(() => {
    console.log("İlk kez renderlandığında çalışır + beguhan değerinde bir değişiklik olduğunda")
  }, [BALTACI])
  useEffect(() => {
    console.log("İlk kez renderlandığında çalışır + furkan veya beguhan değerinde bir değişiklik olduğunda")
  }, [furkan, BALTACI])





  return (

    <div className='App'>
      <div className='firstDiv'>
        <button onClick={() => setFurkan(furkan + 1)}>Furkan ++</button>
        <div>
          Furkan : {furkan}
        </div>
      </div>
      <div>
        <button onClick={() => setBALTACI(BALTACI + 1)}>BALTACI ++</button>
        <div>
          BALTACI : {BALTACI}
        </div>
      </div>
    </div>
  );

}

export default App
