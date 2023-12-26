import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, removeCourse }) {
    const [index, setIndex] = useState(0);
    const { content, title, price } = courses[index];

    const checkIndex = (index) => {
        if (index < 0) {
            return courses.length - 1;
        }
        if (index > courses.length - 1) {
            return 0;
        }
        return index;
    }


    const getRandomCourse = () => {

        let randomNumber = Math.floor(Math.random() * courses.length);

        if (randomNumber === index) {
            getRandomCourse();
        }
        else {
            setIndex(checkIndex(randomNumber));

        }


    };


    const nextCourse = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);

        })
    }

    const prevCourse = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);

        })
    }

    return (
        <div className="courseMainDiv">
            <div className="kurslarim-div">
                <h2>Kurslarım</h2>
                <button onClick={getRandomCourse} className="cardDeleteBtn">
                    Rastgele Kurs Ata
                </button>
            </div>
            <div className="card-div">
                <button onClick={prevCourse} className="prevNextBtn">
                    <FaChevronLeft />
                </button>
                <div className="card">
                    <div className="cardTitlePrice">
                        <h2 className="cardTitle">{title}</h2>
                        <h4 className="cardPrice">{price} TL</h4>
                    </div>
                    <p>{content}</p>

                </div>
                <button onClick={nextCourse} className="prevNextBtn">
                    <FaChevronRight />
                </button>

            </div>
        </div>

    );
}

export default Courses;