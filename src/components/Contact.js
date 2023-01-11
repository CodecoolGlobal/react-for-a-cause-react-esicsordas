import { useState } from "react";
import Form from './Form'
//import Textarea from './Textarea';


export default function Contact(props) {

  const [contactInfo, setContactInfo] = useState({
    lastname: "",
    firstname: "",
    subject: "",
    email: "",
    message: ""
  });

  // const handleChange = (event) => {
  //   setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  // };

  const handleSubmit = (event) => {
    props.onSubmit();
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo({ lastname: "", firstname: "", subject: "", email: "", message: "" });
  };

  return (
    <div className = "Form" >
      <form onSubmit={handleSubmit} onChange={setContactInfo}>
        <div>
          <h3>Lépjen kapcsolatba Velünk!</h3>
        </div>
        <div>
          <Form type={"text"} name = {"lastname"} subtitle = {"Vezetéknév"} value={contactInfo.lastname}></Form>
        </div>
        <div>
          <Form type={"text"} name={"firstname"} subtitle={"Keresztnév"} value={contactInfo.firstname} />
        </div>
        <div>
          <Form type={"text"} name={"subject"} subtitle={"Tárgy"} value={contactInfo.subject} />
        </div>
        <div>
          <Form type={"email"} name={"email"} subtitle={"E-mail"} value={contactInfo.email} />
        </div>
        <div>
          <Form type={"text"} name={"message"} subtitle={"Üzenet"} value={contactInfo.message} />
        </div>
        {/* <div>
          <Textarea type={"text"} name={"message"} subtitle={"Üzenet"} value={contactInfo.message} />
        </div> */}
        <div>
          <button type = "submit" value="Submit" >Submit</button>
          {/* <MyButton type = {"submit"} onClickButton = {() => {props.onActivate("Elküldés")}} text={"Elküldés"}/> */}
        </div>
      </form>
    </div>)
}