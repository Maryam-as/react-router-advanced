import { Link, useSubmit } from "react-router-dom";

import classes from "./EventItem.module.css";

function EventItem({ event }) {
  // useSubmit() returns a function that allows programmatically submitting a form or
  // calling an action without a traditional form element.
  const submit = useSubmit();

  function startDeleteHandler() {
    // window.confirm displays a browser dialog asking the user to confirm the action.
    // It returns true if the user clicks "OK" and false if they click "Cancel".
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      // Here, submit function programmatically triggers the route's action with a DELETE method.
      submit(null, { method: "DELETE" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
