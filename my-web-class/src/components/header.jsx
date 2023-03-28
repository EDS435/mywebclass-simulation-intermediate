import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import PrivacyModal from './PrivacyModal';

const Header = ({ onPrivacyAgree }) => (
  <header role="banner" className="fixed-top">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" aria-label="Main navigation">
      <Container>
        <PrivacyModal onAgree={onPrivacyAgree} />
        <Navbar.Brand href="/">MyWebClass.org</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto">
            <Nav.Link href="content.html">Content Template</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
