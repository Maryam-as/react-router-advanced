import { useParams } from "react-router-dom";

function EventDetailPage() {
  // params contains the dynamic path parameters (e.g., eventId) from the current URL
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
}

export default EventDetailPage;
