import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewDestinationForm.module.css";
function NewDestinationForm(props) {
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const imageInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const meetupData = {
      title: enteredTitle,
      address: enteredAddress,
      description: enteredDescription,
      image: enteredImage,
    };
    // console.log(meetupData);
    props.onAddMeetup(meetupData);
    // console.log(event.target.elements.title.value);
    // console.log(event.target.elements.description.value);
    // console.log(event.target.elements.image.value);
    // console.log(event.target.elements.address.value);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Destination title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Destination image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Destination address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Destination description</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add destination</button>
        </div>
      </form>
    </Card>
  );
}
export default NewDestinationForm;
