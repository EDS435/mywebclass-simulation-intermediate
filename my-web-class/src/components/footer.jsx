import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import NewsletterForm from './NewsletterForm';

const Footer = () => (
  <footer className="py-5 container">
    <Row>
      <Col>
        <h5>About Us</h5>
        <Nav className="flex-column">
          <Nav.Link className="mb-2" href="story.html">
            Our Story
          </Nav.Link>
          <Nav.Link className="mb-2" href="privacy.html">
            Privacy Policy
          </Nav.Link>
        </Nav>
      </Col>
      <Col sm={3}>
        <h5>Share on Social Media</h5>
        <Nav>
          <Nav.Link className="mb-2" href="#">
            <i className="bi bi-linkedin me-2"></i>LinkedIn
          </Nav.Link>
          <Nav.Link className="mb-2" href="#">
            <i className="bi bi-twitter me-2"></i>Twitter
          </Nav.Link>
          <Nav.Link className="mb-2" href="#">
            <i className="bi bi-facebook me-2"></i>Facebook
          </Nav.Link>
        </Nav>
      </Col>
      <Col md={5} className="offset-md-1 mb-3">
        <NewsletterForm />
      </Col>
    </Row>
  </footer>
);

export default Footer;
