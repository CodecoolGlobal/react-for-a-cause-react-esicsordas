import { useState } from "react";
import Form from './Form'

export default function Donate(props) {

  const [contactInfo, setContactInfo] = useState({
    lastname: "",
    firstname: "",
    subject: "Donation",
    cardnumber: "",
    expirationdate: "",
    cvccode: ""
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    props.onSubmit();
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo({
        lastname: "",
        firstname: "",
        subject: "Donation",
        cardnumber: "",
        expirationdate: "" ,
        cvccode: ""
      });
  };

  return (
    <div className = "Form" >
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div>
          <h3>Kérjük adja meg bankkártya adatait!</h3>
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
          <Form type={"number"} name={"cardnumber"} subtitle={"Bankkártya száma"} value={contactInfo.cardnumber} />
        </div>
        <div>
          <Form type={"date"} name={"expirationdate"} subtitle={"Lejárati dátum"} value={contactInfo.expirationdate} />
        </div>
        <div>
          <Form type={"number"} name={"cvccode"} subtitle={"CVC kód"} value={contactInfo.cvccode} />
        </div>
        <div>
          <button type = "submit" value="Submit" >Adakozás</button>
        </div>
      </form>
    </div>)
}