
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Courses from './Courses'
import Loading from './Loading'

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);



  const fetchCourses = async () => {
    setLoading(true); //data çekme başladı 
    try {
      const response = await axios.get("http://localhost:3000/courses",);
      setCourses(response.data);
      setLoading(false); // data çekme bitti
    }
    catch (error) {
      setLoading(false); // hata mesajı alana kadar da beklenir alınınca bekleme biter false döner
    }


  }

  const deleteCourse = (id) => {
    const afterDeleteCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeleteCourses);
  }

  useEffect(() => {
    fetchCourses();
  }, [])

  return (
    <div className='App'>
      {loading ?
        (<Loading />
        )
        :
        (
          <>
            {
              courses.length === 0 ?
                (<div className='refresh-div'>
                  <h2>Kursların hepsini sildin</h2>
                  <button className='cardDeleteBtn' onClick={fetchCourses}>Yenile</button>
                </div>
                )
                :
                (< Courses courses={courses} removeCourse={deleteCourse} />
                )
            }
          </>
        )
      }



    </div>
  )
}

export default App
