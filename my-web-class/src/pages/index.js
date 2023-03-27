import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap'
import { useState } from 'react'
import PrivacyModal from '../components/PrivacyModal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [analyticsConsent, setAnalyticsConsent] = useState('unknown')

  const handlePrivacyAgree = () => {
    setAnalyticsConsent('granted')
    // Enable Google Analytics tracking here
  }
  return (
    <>
          <Head>
        <title>My Web Class</title>
        
      <meta property="og:title" content=""/>
    <meta property="og:description" content=""/>
    <meta property="og:image" content="assets/images/logo.png"/>
    <meta property="og:url" content=""/>
        
        
      </Head>
      <header role="banner" className="fixed-top">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          aria-label="Main navigation"
        >
          <Container>
          <PrivacyModal onAgree={handlePrivacyAgree} />
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
      <main>
        <Container className="my-5">
          <Row className="p-4 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg">
            <Col lg={7} className="p-3 p-lg-3 pt-lg-1">
              <h1 className="display-6 fw-bold lh-1">Revolutionize your teaching</h1>
              <p className="lead">
                Empower your students with cutting-edge software engineering skills.
                Join MyWebClass and discover advanced technologies that will transform
                your teaching and their learning journey.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <Button className="btn-lg px-4 me-md-2 fw-bold" variant="success">
                  Start Here
                </Button>
              </div>
            </Col>
            <Col lg={4} className="offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded-lg-3 img-fluid"
                src="/teacher.gif"
                alt="a teacher with students"
                width="720"
              />
            </Col>
          </Row>
        </Container>
      </main>
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
                <i className="bi bi-linkedin me-2"></i>
              </Nav.Link>
              <Nav.Link className="mb-2" href="#">
                <i className="bi bi-twitter me-2"></i>
              </Nav.Link>
              <Nav.Link className="mb-2" href="#">
                <i className="bi bi-facebook me-2"></i>
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={5} className="offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <Button variant="primary" type="button">
                  Subscribe
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </footer>
    </>
  )
}
