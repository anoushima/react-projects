import React from 'react';
import './Sample.css';
import { Container, Row, Col, Card, Button,Nav,Navbar,Carousel,Form } from 'react-bootstrap';
import { useState } from 'react';

import Tech from '../assets/tech.jpg';
import food from '../assets/food.jpg';
import race from '../assets/race.jpg';
import girl1 from '../assets/girl1.jpg';
import girl2 from '../assets/girl2.jpg';
import men from '../assets/men.jpg';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Sample(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
    <h1>heading from sample heloooooo,{props.name}</h1>
   
{/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">MySite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link onClick={handleShow}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      {/* ---- Carousel Section ---- */}
      <Container fluid className="px-0">
        <Carousel className="custom-carousel mb-5" fade interval={3000} controls={false} pause={false}>
          <Carousel.Item>
            <img className="d-block w-100" src={Tech} alt="Technology" height="500px" />
            <Carousel.Caption>
              <h3>Innovations in Tech</h3>
              <p>Explore the latest trends in technology shaping our future.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={food} alt="Food" height="500px" />
            <Carousel.Caption>
              <h3>Delicious Food</h3>
              <p>Taste the best cuisines from around the world.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={race} alt="Racing" height="500px" />
            <Carousel.Caption>
              <h3>Feel the Speed</h3>
              <p>Experience the thrill of racing at full speed!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold text-danger">Latest Articles</h2>


      <Row className="g-4">

        {/* --- Card 1 --- */}
        <Col md={4} sm={12}>
          <Card className="shadow-lg border-0 h-100">
            <Card.Img variant="top" src={Tech} height="220px" style={{ objectFit: 'cover' }} />
            <Card.Body>
              <Button variant="primary" size="sm" className="mb-2">Technology</Button>
              <Card.Title>What's New in 2022 Tech</Card.Title>
              <Card.Text>
                Explore the latest innovations in tech — from AI breakthroughs to futuristic gadgets.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center bg-white border-0 pt-0">
              <img
                src={girl1}
                width={50}
                height={50}
                className="rounded-circle me-3 border"
                alt="Author"
                style={{ objectFit: 'cover' }}
              />
              <div>
                <h6 className="mb-0">Jony Doe</h6>
                <small className="text-muted">Yesterday</small>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        {/* --- Card 2 --- */}
        <Col md={4} sm={12}>
          <Card className="shadow-lg border-0 h-100">
            <Card.Img variant="top" src={food} height="220px" style={{ objectFit: 'cover' }} />
            <Card.Body>
              <Button variant="primary" size="sm" className="mb-2">Food</Button>
              <Card.Title>Delicious Food</Card.Title>
              <Card.Text>
                Dive into mouth-watering dishes and the stories behind their flavors.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center bg-white border-0 pt-0">
              <img
                src={girl2}
                width={50}
                height={50}
                className="rounded-circle me-3 border"
                alt="Author"
                style={{ objectFit: 'cover' }}
              />
              <div>
                <h6 className="mb-0">Jony Doe</h6>
                <small className="text-muted">Yesterday</small>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        {/* --- Card 3 --- */}
        <Col md={4} sm={12}>
          <Card className="shadow-lg border-0 h-100">
            <Card.Img variant="top" src={race} height="220px" style={{ objectFit: 'cover' }} />
            <Card.Body>
              <Button variant="primary" size="sm" className="mb-2">Racing</Button>
              <Card.Title>Race To Your Heart Content</Card.Title>
              <Card.Text>
                Feel the adrenaline rush of high-speed action and thrilling race stories.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center bg-white border-0 pt-0">
              <img
                src={men}
                width={50}
                height={50}
                className="rounded-circle me-3 border"
                alt="Author"
                style={{ objectFit: 'cover' }}
              />
              <div>
                <h6 className="mb-0">Jony Doe</h6>
                <small className="text-muted">Yesterday</small>
              </div>
            </Card.Footer>
          </Card>
        </Col>

      </Row>
    </Container>


    {/* ---- Testimonials Section ---- */}
      <Container fluid className="bg-light py-5">
        <h2 className="text-center fw-bold text-primary mb-4">What Our Users Say</h2>
        <Container>
          <Carousel indicators={false}>
            <Carousel.Item>
              <div className="text-center">
                <img src={girl1} className="rounded-circle mb-3" width="80" height="80" alt="User" />
                <p className="fst-italic">"This website is amazing! The design and user experience are top-notch."</p>
                <h6 className="fw-bold">– Sarah Johnson</h6>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center">
                <img src={men} className="rounded-circle mb-3" width="80" height="80" alt="User" />
                <p className="fst-italic">"Very informative articles and the UI feels modern and clean."</p>
                <h6 className="fw-bold">– David Miller</h6>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center">
                <img src={girl2} className="rounded-circle mb-3" width="80" height="80" alt="User" />
                <p className="fst-italic">"I love coming here for new insights and ideas every week!"</p>
                <h6 className="fw-bold">– Emma Brown</h6>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>



      {/* ---- Contact Form ---- */}
      <Container id="contact" className="py-5">
        <h2 className="text-center fw-bold text-success mb-4">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm border-0">
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit">Send Message</Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>



      {/* ---- Footer ---- */}
      <footer className="bg-dark text-white pt-5 pb-3">
        <Container>
          <Row>
            {/* Column 1 */}
            <Col md={4} sm={12} className="mb-4">
              <h5 className="text-uppercase fw-bold mb-3">MySite</h5>
              <p>
                Bringing you the latest in technology, food, and lifestyle.
                Stay informed and inspired every day.
              </p>
            </Col>

            {/* Column 2 */}
            <Col md={4} sm={12} className="mb-4">
              <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
                <li><a href="#courses" className="text-white text-decoration-none">Courses</a></li>
                <li><a href="#about" className="text-white text-decoration-none">About</a></li>
                <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </Col>

            {/* Column 3 */}
            <Col md={4} sm={12} className="mb-4">
              <h5 className="text-uppercase fw-bold mb-3">Contact Us</h5>
              <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i>123 Main Street, Mumbai, India</p>
              <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i>info@mysite.com</p>
              <p className="mb-3"><i className="bi bi-telephone-fill me-2"></i>+91 98765 43210</p>
              <div>
                <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
              </div>
            </Col>
          </Row>

          <hr className="border-light" />
          <p className="text-center mb-0">
            © {new Date().getFullYear()} MySite | Designed with using React & Bootstrap
          </p>
        </Container>
      </footer>


    
  

    </>
  );
}

export default Sample;