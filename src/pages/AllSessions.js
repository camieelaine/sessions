import { useState, useEffect } from "react";

import SessionList from "../components/sessions/SessionList";

function AllSessionsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSessions, setLoadedSessions] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://classes-472b6-default-rtdb.firebaseio.com/sessions.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const sessions = [];

        for (const key in data) {
          const session = {
            id: key,
            ...data[key],
          };

          sessions.push(session);
        }

        setIsLoading(false);
        setLoadedSessions(sessions);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Classes</h1>
      <SessionList sessions={loadedSessions} />
    </section>
  );
}

export default AllSessionsPage;
