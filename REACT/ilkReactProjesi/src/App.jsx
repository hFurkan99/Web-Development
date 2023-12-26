import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const nameSurname = "Hasan Furkan";
  const age = 24;
  const ehliyetBilgisi = true;
  const tarih = "date";
  const imgUrl = "https://picsum.photos/500/300";

  return (
    <>
      <h2>AD SOYAD : {nameSurname}</h2>
      <p>Yaş : {age}</p>
      <input type="text" />
      <br />
      <br />
      Ehliyet: {ehliyetBilgisi ? "Var" : "Yok"}
      <div>
        <input type={tarih} />
        <img src={imgUrl} alt="" />
      </div>
      <div className="box"></div>
      <div
        style={{ backgroundColor: "red", width: "250px", height: "250px" }}
      ></div>
    </>
  );
}

export default App;
