import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import PrivacyModal from './PrivacyModal';

const Header = ({ onPrivacyAgree }) => (
  <header role="banner" className="fixed-top">
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="gray-900"
      variant="dark"
      aria-label="Main navigation"
      className="px-4 py-3"
    >
      <Container>
        <PrivacyModal onAgree={onPrivacyAgree} />
        <Navbar.Brand href="/" className="text-lg font-bold tracking-wider">
          MyWebClass.org
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" className="border-0">
          <span className="sr-only">Toggle navigation</span>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto">
            <Nav.Link href="content.html" className="text-base font-medium">
              Content Template
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;