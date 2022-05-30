import { useState, useEffect } from "react"
import { CONFIG_PATH } from "../../helpers/useConfigPath"
import { useChangeGridRows } from "../../helpers/Helper"
import UpcomingEvent from "./UpcomingEvent"
import "../components.css"

export default function UpcomingEvents() {
  const [ upcomingEvents, setUpcomingEvents ] = useState([])

  // Change amount of items per row in grid
  // (depending on width of screen and amount of upcoming events)
  useChangeGridRows(
    (newState) => document.querySelector(":root").style.setProperty("--upcoming-events-per-row", newState),
    {
      amountOfItems: upcomingEvents.length,
      getIsScreenWide: () => getComputedStyle(document.querySelector(":root")).getPropertyValue("--is-screen-wide")
    }
  )

  useEffect(() => {
    const fetchConfigData = async () => {
      const res = await fetch(CONFIG_PATH)
      const data = await res.json()
      setUpcomingEvents(data.UPCOMING_EVENTS)
    }

    fetchConfigData()
  }, [])

  return (
    <div className="upcoming-event-container">
      {upcomingEvents.map((upcomingEvent, index) => (
        <UpcomingEvent key={index} upcomingEvent={upcomingEvent} />
      ))}
    </div>
  )
}
