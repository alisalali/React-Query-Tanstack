export async function fetchEvents({ signal, searchTerm }) {
  let url = "http://localhost:3000/events";
  console.log(searchTerm);

  if (searchTerm) {
    url += "?search=" + searchTerm;
  }
  const response = await fetch(url, { signal });
  console.log(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}
