import { useRef } from "react"
import backgroundImage from "./images/home-background.jpg"
import Button from "./components/Button"
import Header from "./components/Header"
import Courses from "./components/courses-section/Courses"
import UpcomingEvents from "./components/upcoming-events-section/UpcomingEvents"

export default function Home() {
  const coursesSection = useRef()

  const goToCourses = () => {
    coursesSection.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

  return (
    <div className="wrapper">
      <Header />
      <img className="background-image"
      src={backgroundImage} alt="Not found" />
      <div className="main-section">
        <div className="main-section-text mb-3 p-3 d-flex flex-column text-center">
          <p className="main-primary-text">Main Text</p>
          <p className="main-secondary-text">Secondary smaller text</p>
          <p className="main-third-text">Third even smaller text with underline</p>
          <Button
            props={{
              text: "View all courses",
              className: "mt-4",
              action: goToCourses
            }}
          />
        </div>
      </div>
      <div className="courses-section" ref={coursesSection}>
        <div className="mt-4 mb-3 p-3 d-flex flex-column justify-content-center text-center">
          <p className="courses-primary-text t-5 mb-5">Check out my courses</p>
          <Courses />
        </div>
      </div>
      <div className="upcoming-events-section">
        <div className="mt-4 mb-3 p-3 d-flex flex-column justify-content-center text-center">
          <p className="upcoming-events-primary-text t-5 mb-5">Upcoming events</p>
          <UpcomingEvents />
        </div>
      </div>
      <div className="subscribe-section">

      </div>
    </div>
  )
}
