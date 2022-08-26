import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../ContactMe.css";
const ContactMeForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // console.log()
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <Form className="contact_form">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control
          type="name"
          value={name}
          name="name"
          onChange={handleInputChange}
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Control
          type="message"
          name="message"
          value={message}
          onChange={handleInputChange}
          placeholder="Enter message"
        />
      </Form.Group>
      <Button
        type="submit"
        style={{ backgroundColor: "#34cca6", border: "none" }}
        className="submit_btn"
        onClick={handleFormSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default ContactMeForm;
