import { useState, useEffect } from "react"
import { CONFIG_PATH } from "../../helpers/useConfigPath"
import { useChangeGridRows } from "../../helpers/Helper"
import Course from "./Course"
import "../components.css"

export default function Courses() {
  const [ courses, setCourses ] = useState([])
  
  // Change amount of items per row in grid
  // (depending on width of screen and amount of courses)
  useChangeGridRows(
    (newState) => document.querySelector(":root").style.setProperty("--courses-per-row", newState),
    {
      amountOfItems: courses.length,
      getIsScreenWide: () => getComputedStyle(document.querySelector(":root")).getPropertyValue("--is-screen-wide")
    }
  )

  useEffect(() => {
    const fetchConfigData = async () => {
      const res = await fetch(CONFIG_PATH)
      const data = await res.json()
      setCourses(data.COURSES)
    }

    fetchConfigData()
  }, [])
  
  return (
    <div className="course-container">
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
    </div>
  )
}
