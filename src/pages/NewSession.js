import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/sessions/NewSessionForm";

function NewSessionPage() {
  const history = useHistory();

  function addSessionHandler(sessionData) {
    fetch("https://classes-472b6-default-rtdb.firebaseio.com/sessions.json", {
      method: "POST",
      body: JSON.stringify(sessionData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Class</h1>
      <NewMeetupForm onAddSession={addSessionHandler} />
    </section>
  );
}

export default NewSessionPage;
