import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import PrivacyModal from './PrivacyModal';
import Link from 'next/link';

const Header = ({ onPrivacyAgree }) => (
  <header role="banner" className="fixed-top">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" aria-label="Main navigation">
      <Container>
        <PrivacyModal onAgree={onPrivacyAgree} />
        <Link href="/" passHref>
          <Navbar.Brand>MyWebClass.org</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto">
          <Link href="/content" passHref>
          <Navbar.Brand>Content Page</Navbar.Brand>
        </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
