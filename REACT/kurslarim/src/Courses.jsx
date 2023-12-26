import Course from "./Course";



function Courses({ courses, removeCourse }) {

    return (
        <div className="courseMainDiv">
            <div>
                <h2>Kurslarım</h2>
            </div>
            <div className="card-div">
                {
                    courses.map((course) => {
                        return (
                            <Course key={course.id} {...course} removeOneCourse={removeCourse} /> // spread operator
                            //course = { course } key = { index }
                        )
                    })
                }
            </div>
        </div>

    );
}

export default Courses;