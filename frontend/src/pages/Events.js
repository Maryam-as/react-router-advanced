import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

import EventsList from "../components/EventsList";

function EventsPage() {
  // useLoaderData retrieves the data returned by the route's loader function.
  // In this case, it gives us an object with a promise for `events`.
  const { events } = useLoaderData();

  return (
    // Suspense is used to display a fallback UI while the data is still being loaded.
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      {/* Await is a special component from React Router that "unwraps" a promise
          returned from the loader and renders its resolved value once available. */}
      <Await resolve={events}>
        {/* When the promise resolves, this function is called with the resolved data.
            Here we pass the loaded events into our EventsList component. */}
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    // Parse the JSON and return only the `events` array.
    const resData = await response.json();
    return resData.events;
  }
}
export function loader() {
  // Instead of awaiting the result, we return the promise directly.
  // This enables React Router's <Await> and <Suspense> to handle deferred loading.
  return { events: loadEvents() };
}
