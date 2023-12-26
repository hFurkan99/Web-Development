import { Link } from "react-router-dom";

// import { useLoaderData } from "react-router-dom";
function EventsList({ events }) {
  //useLoaderData() aynı seviyedeki komponentlerde ya da daha aşağıdaki komponentlerde kullanılabilir.
  // const events = useLoaderData();

  return (
    <div className="eventsEventsList">
      <h1>All Events</h1>
      <ul className="listEventsList">
        {events.map((event) => (
          <li key={event.id} className="itemEventsList">
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className="contentEventsList">
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
