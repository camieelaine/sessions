import Card from "../ui/Card";
import classes from "./NewSessionForm.module.css";

function NewSessionForm() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Class Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Class Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Class</button>
        </div>
      </form>
    </Card>
  );
}

export default NewSessionForm;
