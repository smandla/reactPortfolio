import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./ContactMe.css";
import ContactMeForm from "./ContactMeForm/ContactMeForm";
const ContactMe = () => {
  return (
    <Container className="container_contact">
      <h2 className="contact_title">Contact Me</h2>
      <ContactMeForm />
    </Container>
  );
};

export default ContactMe;
