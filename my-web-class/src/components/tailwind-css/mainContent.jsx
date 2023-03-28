import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const MainContent = () => (
  <Container className="my-5">
    <Row className="p-4 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg">
      <Col lg={7} className="p-3 p-lg-3 pt-lg-1">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Revolutionize your teaching
        </h1>
        <p className="text-xl md:text-2xl mb-4 leading-normal">
          Empower your students with cutting-edge software engineering skills.
          Join MyWebClass and discover advanced technologies that will transform
          your teaching and their learning journey.
        </p>
        <div className="flex flex-col md:flex-row md:justify-start mb-4 md:mb-0 gap-2">
          <Button className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-600">
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
);

export default MainContent;