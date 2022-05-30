import "../components.css"

export default function UpcomingEvent({ upcomingEvent }) {
  return (
    <div className="upcoming-event-card d-flex flex-column">
      <div className="upcoming-event-image-container">
        <img className="upcoming-event-image" src={upcomingEvent.thumbnail} alt="Not found" />
      </div>
      <div className="mt-1 d-flex flex-column">
        <div className="mb-5 m-0 p-0 ps-1 pe-1 pb-5 mb-2 d-flex flex-column">
          <p className="upcoming-event-title m-0 p-0 mb-2 text-start">{upcomingEvent.title}</p>
          <p className="upcoming-event-description m-0 p-0 text-start">{upcomingEvent.description}</p>
        </div>
        <div className="upcoming-event-last-info-container w-100">
          <a className="btn btn-primary w-75 align-self-center"
          href={`https://www.google.com/maps/?q=${upcomingEvent.location}`}
          target="_blank" rel="noreferrer">View location</a>
          <div className="mt-1 d-flex flex-row justify-content-between w-100">
            <p className="upcoming-event-last-info fw-bold me-1">Time & day:</p>
            <p className="upcoming-event-last-info me-3">{upcomingEvent.time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
