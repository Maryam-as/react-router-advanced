import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm />;
}

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  // If the backend responds with 422 (Unprocessable Entity), it means
  // validation failed (e.g., missing or invalid input data).
  // Returning the response here allows React Router to expose the error
  // data to the form, so validation messages can be displayed to the user.
  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not save event." }), {
      status: 500,
    });
  }

  // Use redirect from react-router-dom to automatically navigate the user
  // back to the /events page after successfully creating a new event.
  return redirect("/events");
}
