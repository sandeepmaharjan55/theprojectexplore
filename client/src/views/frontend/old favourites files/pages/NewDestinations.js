import NewDestinationForm from "../components/meetups/NewDestinationForm";
import { useHistory } from "react-router-dom";

function NewDestinations() {
  const history = useHistory();
  function AddMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-70c36-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add new destination</h1>
      <NewDestinationForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
}
export default NewDestinations;
