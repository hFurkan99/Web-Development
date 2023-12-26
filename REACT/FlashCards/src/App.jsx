import FlashCards from "./FlashCards";
import { questions } from "./questions";
function App() {
  return (
    <div className="App">
      <FlashCards questions={questions} />
    </div>
  );
}

export default App;
