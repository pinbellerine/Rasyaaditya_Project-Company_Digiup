import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const alertMessage = `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Message: ${formData.message}
    `;

    window.alert(alertMessage);
  };

  return (
    <Container className="contact-container">

      <Row className="contact-content">
        {/* Left Column */}
        <Col md={6} className="contact-info">
          <h2>Reach Us for Immediate Assistance</h2>
          <p>
            Thank you for choosing us! Our support team will respond to all inquiries within 24–48 hours, Monday to Friday (9:00 AM – 5:00 PM GMT), excluding holidays.
          </p>
          <p>
            For immediate assistance with account-related or technical questions, chat live with us during office hours (Monday to Friday, 9:00 AM – 5:00 PM GMT). We're ready to help!
          </p>
        </Col>

        {/* Right Column */}
        <Col md={6} className="contact-form">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" className="btn-submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8341391670133!2d-73.84493808459326!3d40.720937579330566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260cfcd5f3d27%3A0x632d69b9f6d1797e!2sQueens%2C%20NY!5e0!3m2!1sen!2sus!4v1614192027818!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Container>
  );
}

export default Contact;
