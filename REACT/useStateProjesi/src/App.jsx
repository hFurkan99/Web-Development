import Course from "./Course"
import './App.css'
import { useState } from "react";

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "KompleWeb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);


  const handleClick = () => setCourses([...courses, getRandomCourse()]);

  //daha önceki değerlerin geçerli olması için ... kullanılır. Yani; courses'ın yeni tıklamaya kadar aldığı değerler de dizinin içinde bulunur ve setCourses içindeki getRandomCourse da yeni bir rastgele elemanı bu diziye ekler


  const courseList = courses.map((course, index) => <Course key={index} courseName={course} />);





  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>Kurs Ekle</button>
      <div className="courseList">
        {courseList}
      </div>

    </div>
  );

}
export default App
