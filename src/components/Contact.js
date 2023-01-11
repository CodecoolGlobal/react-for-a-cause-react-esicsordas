import { useState } from "react";
import Form from './Form'
import MyButton from './Button';

export default function Contact(props) {

  const [contactInfo, setContactInfo] = useState({
    lastname: "",
    firstname: "",
    subject: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleClickEvent = () => {
    console.log("valami történik itt")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo({ lastname: "", firstname: "", subject: "", email: "", message: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div>
          <h3>Contact Form</h3>
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
        <div>
          <MyButton onClickButton = {() => {props.onActivate("Elküldés")}} text={"Elküldés"}/>
        </div>
      </form>
    </div>)
}