import { NavLink } from "react-router-dom";
function EventsNavigation() {
  return (
    <header className="headerEventsNav">
      <nav>
        <ul className="listEventsNav">
          <li>
            <NavLink to="/events" end>
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/events/new">New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
