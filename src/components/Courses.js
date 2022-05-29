import "./components.css"
import configData from "../config.json"
import Course from "./Course"

export default function Courses() {
  const courses = configData.COURSES
  
  return (
    <div className="course-container">
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
    </div>
  )
}
