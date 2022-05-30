import "../components.css"

export default function Course({ course }) {
  return (
    <div className="course-card d-flex flex-column">
      <div className="course-image-container">
        <img className="course-image" src={course.thumbnail} alt="Not found" />
      </div>
      <div className="course-info-container mt-1 d-flex flex-column">
        <div className="m-0 p-0 ps-1 pe-1 pb-5 d-flex flex-column">
          <p className="course-title m-0 p-0 mb-2 text-start">{course.title}</p>
          <p className="course-description m-0 p-0 mb-0 text-start">{course.description}</p>
        </div>
        <div className="course-last-info-container w-100 d-flex flex-row justify-content-between">
          <p className="ms-1 p-0 mb-0 course-last-info">Name Lastname</p>
          <p className="me-2 p-0 mb-0 course-last-info">{course.price}</p>
        </div>
      </div>
    </div>
  )
}
