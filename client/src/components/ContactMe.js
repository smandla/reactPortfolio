import React from "react";
import { Form, Button } from "react-bootstrap";
import "./ContactMe.css";
import ContactMeForm from "./ContactMeForm";
const ContactMe = () => {
  return (
    <div>
      <h2 className="contact_title">Contact Me</h2>
      <ContactMeForm />
    </div>
  );
};

export default ContactMe;
