import { useState } from "react";
import Footer from "../components/footer";
import "../styles/contact.css";

function Contact() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    confirm: false,
  };
  const [formData, setFormData] = useState(initialFormData);

  const [formError, setFormError] = useState({});

  // This function validates form input
  function validate(obj) {
    const errors = {};

    if (!obj.firstName) {
      errors.firstName = "Firstname field is required";
    }

    if (!obj.lastName) {
      errors.lastName = "Lastname field is required";
    }

    if (!obj.email) {
      errors.email = "Input a valid Email";
    }

    if (!obj.message) {
      errors.message = "Message field is required";
    }

    return errors;
  }

  const styles = {
    backgroundColor: formData.confirm ? "#1570ef" : "#B2DDFF",
    border: formData.confirm ? "1px solid #1570ef" : "1px solid #B2DDFF",
  };

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errorData = validate(formData);
    setFormError(errorData);
    setFormData(initialFormData);
    console.log(formData);
  }

  return (
    <div className="contact">
      <div className="container">
        <header className="header">
          <h1 className="heading">Contact Me</h1>
          <p className="text">
            Hi there, contact me to ask me about anything you have in mind
          </p>
        </header>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="box">
            <div className="col-1">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
              />
              <p className="error">{formError.firstName}</p>
            </div>

            <div className="col-2">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
              />
              <p className="error">{formError.lastName}</p>
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <p className="error">{formError.email}</p>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message and I'll reply you as soon possible"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <p className="error">{formError.message}</p>
          <div className="row-2">
            <input
              type="checkbox"
              id="confirm"
              name="confirm"
              checked={formData.confirm}
              onChange={handleChange}
            />
            <label htmlFor="confirm">
              You agree to providing your data to Andrew Ezeani who may contact
              you
            </label>
          </div>
          <button
            disabled={formData.confirm ? false : true}
            style={styles}
            id="btn__submit"
          >
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
