import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import NewsletterForm from './NewsletterForm';

const Footer = () => (
  <footer className="py-5 bg-gray-800">
    <div className="container mx-auto">
      <Row className="justify-between">
        <Col className="mb-6 md:mb-0">
          <h5 className="text-xl font-bold mb-4 text-white">About Us</h5>
          <Nav className="flex-col">
            <Nav.Link href="story.html" className="text-gray-400 hover:text-white mb-2">
              Our Story
            </Nav.Link>
            <Nav.Link href="privacy.html" className="text-gray-400 hover:text-white mb-2">
              Privacy Policy
            </Nav.Link>
          </Nav>
        </Col>
        <Col className="mb-6 md:mb-0">
          <h5 className="text-xl font-bold mb-4 text-white">Share on Social Media</h5>
          <Nav className="flex-col">
            <Nav.Link href="#" className="text-gray-400 hover:text-white mb-2">
              <i className="bi bi-linkedin me-2"></i>LinkedIn
            </Nav.Link>
            <Nav.Link href="#" className="text-gray-400 hover:text-white mb-2">
              <i className="bi bi-twitter me-2"></i>Twitter
            </Nav.Link>
            <Nav.Link href="#" className="text-gray-400 hover:text-white mb-2">
              <i className="bi bi-facebook me-2"></i>Facebook
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={5}>
          <NewsletterForm />
        </Col>
      </Row>
    </div>
  </footer>
);

export default Footer;