import SessionItem from "./SessionItem";
import classes from "./SessionList.module.css";

function SessionList(props) {
  return (
    <ul className={classes.list}>
      {props.sessions.map((session) => (
        <SessionItem
          key={session.id}
          id={session.id}
          image={session.image}
          title={session.title}
          address={session.address}
          description={session.description}
        />
      ))}
    </ul>
  );
}

export default SessionList;
