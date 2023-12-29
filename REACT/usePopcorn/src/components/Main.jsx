import WatchedBox from "./WatchedBox";
import { tempWatchedData } from "../data/WatchedData";
import { useState } from "react";

function Main({ children }) {
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <main className="main">
      {children}
      <WatchedBox watched={watched} />
    </main>
  );
}

export default Main;
