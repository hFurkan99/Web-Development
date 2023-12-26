import Profile from "./components/Profile";
import data from "./data";

function App() {
  return (
    <div>
      {data.map((x) => (
        <Profile key={x.name} data={x} />
      ))}
    </div>
  );
}

export default App;
