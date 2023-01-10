import { useState } from "react";

export default function Contact() {

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
          <input
            type="text"
            name="lastname"
            placeholder="Vezetéknév"
            value={contactInfo.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            name="firstname"
            placeholder="Keresztnév"
            value={contactInfo.firstname}
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Tárgy"
            value={contactInfo.subject}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
          />
        </div>
        <div>
          <input
            type="text"
            name="message"
            placeholder="Üzenet"
            value={contactInfo.message}
          />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>)
}