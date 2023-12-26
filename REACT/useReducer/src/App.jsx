
import './App.css'
import { useReducer } from 'react'

function App() {


  const initialValue = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "arttir":
        return state + 1;
      case "azalt":
        return state - 1;
      case "sifirla":
        return initialValue;
      default:
        return state;
    }
  }


  const [state, dispatch] = useReducer(reducer, initialValue);



  return (
    <div>
      <div>
        sayı = {state}
      </div>
      <div>
        <button onClick={() => dispatch("arttir")}>Arttır</button>
        <button onClick={() => dispatch("azalt")}>Azalt</button>
        <button onClick={() => dispatch("sifirla")}>Sıfırla</button>
      </div>
    </div>
  )
}

export default App
