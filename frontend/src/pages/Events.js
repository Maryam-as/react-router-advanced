import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return { isError: true, message: "Could not fetch events." };
  } else {
    // Return the Response object directly — React Router will automatically
    // parse the JSON when accessed via useLoaderData in the component
    return response;
  }
}
