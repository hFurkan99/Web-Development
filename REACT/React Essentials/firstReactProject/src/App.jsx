import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header.jsx";
import Examples from "./components/Examples.jsx";

function App() {

  console.log("App Component Executing");

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
