import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewSessionForm.module.css";

function NewSessionForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef(null);
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const fileChangedHandler = (event) => {
    const file = event.currentTarget.files
      ? event.currentTarget.files[0]
      : undefined;
    console.log(file);
    console.log(file.name);
  };

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const sessionData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    console.log(sessionData);
    console.log(enteredImage);
    props.onAddSession(sessionData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Class Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        {/* <div className={classes.control}>
          <label htmlFor="image">Class Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div> */}
        <div className={classes.control}>
          <label htmlFor="image">Class Image</label>
          <input
            type="file"
            required
            id="image"
            ref={imageInputRef}
            onChange={fileChangedHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Class</button>
        </div>
      </form>
    </Card>
  );
}

export default NewSessionForm;
