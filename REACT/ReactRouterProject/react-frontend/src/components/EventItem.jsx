import { Link, useSubmit } from "react-router-dom";

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" }); // EventDetailPage ile aynı routeda olduğu için action tanımlamaya gerek yok. Eğer farklı route'taki bir action kullanılsaydı ->   action: "/a-different-path"
    }
  }

  return (
    <article className="eventEventItem">
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className="actionsEventItem">
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
