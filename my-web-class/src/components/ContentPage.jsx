import React, { useEffect, useState, useRef } from 'react';
import { Container, Nav } from 'react-bootstrap';

const ContentPage = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);
  const menuItems = [];
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, []);

  sections.forEach((section) => {
    const id = section.id;
    const title = section.title;
    const listItem = (
      <Nav.Item key={id}>
        <Nav.Link href={`#${id}`} className={id === activeSection ? 'active' : ''}>
          {title}
        </Nav.Link>
      </Nav.Item>
    );
    menuItems.push(listItem);
  });

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light" style={{ zIndex: '1', paddingTop: '4rem', maxWidth: '250px' }}>
        <Container fluid>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <Nav className="flex-column nav-pills" variant="pills">
              {menuItems}
            </Nav>
          </div>
        </Container>
      </nav>
      <Container as="main" className="col-md-9 ms-sm-auto col-lg-9 px-md-4 pt-5" style={{ paddingTop: '4rem' }}>
        {sections.map((section, index) => (
          <section key={index} id={section.id} ref={(ref) => (sectionRefs.current[index] = ref)}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </section>
        ))}
      </Container>
    </>
  );
};

export default ContentPage;
