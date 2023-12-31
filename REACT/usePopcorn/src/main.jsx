import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import "./index.css";
import StarRating from "./components/StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRating maxRating={15} className="test" />
    <StarRating maxRating={10} color="red" size={80} defaultRating={3} />

    <StarRating
      className="test"
      size={30}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test />

    {/* <App /> */}
  </React.StrictMode>
);
