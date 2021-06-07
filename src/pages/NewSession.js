import NewSessionForm from "../components/sessions/NewSessionForm";

function NewSessionPage() {
  function addSessionHandler(sessionData) {
    fetch(
      "https://profile-59c6f-default-rtdb.firebaseio.com/fitness-classes.json",

      {
        method: "POST",
        body: JSON.stringify(sessionData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>Add New Class</h1>
      <NewSessionForm onAddSession={addSessionHandler} />
    </section>
  );
}

export default NewSessionPage;
