import { Link } from "react-router-dom";
import Footer from "../components/footer";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <header className="header">
          <h1 className="heading">Contact Me</h1>
          <p className="text">
            Hi there, contact me to ask me about anything you have in mind
          </p>
        </header>
        <form className="contact__form">
          <div className="box">
            <div className="col-1">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>

            <div className="col-2">
              <label htmlFor="last_name" className="lname">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
          <label htmlFor="message">Message</label>
          <textarea
            type="email"
            id="message"
            placeholder="Enter your message and I'll reply you as soon possible"
          ></textarea>
          <div className="row-2">
            <input
              type="checkbox"
              id="confirm"
              name="confirm"
              value="confirm"
            />
            <label htmlFor="confirm" className="vvv">
              You agree to providing your data to Andrew Ezeani who may contact
              you
            </label>
          </div>
          <button>Send message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
