import { useState } from "react";
import Form from "./Form";
import Textarea from "./Textarea";

export default function Contact(props) {
  const [contactInfo, setContactInfo] = useState({
    lastname: "",
    firstname: "",
    subject: "",
    email: "",
    message: "",
  });

  /*const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };*/

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    
    const contact = [...form.entries()].reduce((acc, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, {});

    console.log(contact);
    setContactInfo(contact);
    
    props.onSubmit();
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Lépjen kapcsolatba Velünk!</h3>
        </div>
        <div>
          <Form
            type={"text"}
            name={"lastname"}
            subtitle={"Vezetéknév"}
            value={contactInfo.lastname}
          ></Form>
        </div>
        <div>
          <Form
            type={"text"}
            name={"firstname"}
            subtitle={"Keresztnév"}
            value={contactInfo.firstname}
          />
        </div>
        <div>
          <Form
            type={"text"}
            name={"subject"}
            subtitle={"Tárgy"}
            value={contactInfo.subject}
          />
        </div>
        <div>
          <Form
            type={"email"}
            name={"email"}
            subtitle={"E-mail"}
            value={contactInfo.email}
          />
        </div>
        <div>
          <Textarea
            type={"text"}
            name={"message"}
            subtitle={"Üzenet"}
            value={contactInfo.message}
          />
        </div>
        <div>
          <button type="submit" value="Submit">
            Elküldés
          </button>
        </div>
      </form>
    </div>
  );
}
