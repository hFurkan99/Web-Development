import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import "./Course.css";


const courseMap = {   //obje oluşturma
    Angular,  //key ve value değerleri birbirine eşitse bir kere yazılabilir değilse    key: value,     şeklinde yazılmalı 
    Bootstrap,
    Ccsharp,
    KompleWeb,
};



function Course({ courseName }) {
    // console.log(courseName);
    return (
        <div className="courseDiv">
            <img className="courseImage" src={courseMap[courseName]} alt="course" />      {/*  objeden sonra köşeli paranteze key değeri verip value döndürülür /// courseMap.courseName ile de gösterilebilirdi  */}
        </div>
    );
}





export default Course;