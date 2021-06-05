import SessionList from "../components/sessions/SessionList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first session",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Sessionstreet 5, 12345 Session City",
    description:
      "This is a first, amazing Session which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second Session",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Sessionstreet 5, 12345 Session City",
    description:
      "This is a first, amazing Session which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllSessionsPage() {
  return (
    <section>
      <h1>All Sessions</h1>
      <SessionList sessions={DUMMY_DATA} />
    </section>
  );
}

export default AllSessionsPage;
