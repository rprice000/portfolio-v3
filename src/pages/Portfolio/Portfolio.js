// React Imports
import React, { useState } from 'react';
// import { Container, Card, Col, Row, ListGroup, Table } from 'react-bootstrap';
import { Container, Row, Col, Button, Nav, Modal} from 'react-bootstrap';

// Styling Imports
import '../Portfolio/Portfolio.css'

// Component Imports



const Portfolio = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
            <div id="portfolio-page">
                <section id="portfolio-hero" className="mb-5 d-flex justify-content-center align-items-center">
                    <div className="flex-column d-flex justify-content-center align-items-center">
                        <h1 class="hero-content">
                            Welcome to My Web Portfolio
                        </h1>
                    
                        <h3 class="hero-content">
                            For more info on my projects hover a card.
                        </h3>
                    </div>
                </section>
                <Container fluid>
                {/* d-flex justify-content-center align-items-center */}
                    <Row>


                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex">
                                <div class="card-content-spacing card-bottom">
                                    <Nav className="flex-column">
                                        <Button href="https://rprice000.github.io/run-buddy/" target="_blank" className="mt-2 mb-2">Deployed App</Button>
                                        <Button href="https://github.com/rprice000/run-buddy" target="_blank" className="mt-2 mb-2">GitHub Repo</Button>
                                        <Button className="mt-2 mb-2" onClick={handleShow}>Modal Info</Button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header>
                                            <Modal.Title>Modal heading</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Nav>
                                </div>

                                <div class="card-content-spacing card-cover">
                                    <h2>Project: Run-Buddy</h2>
                                </div>
                            </div>
                        </Col>





                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>2</h3>
                            </div>
                        </Col>


                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>3</h3>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>4</h3>
                            </div>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>5</h3>
                            </div>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>6</h3>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-around">
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>7</h3>
                            </div>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>8</h3>
                            </div>
                        </Col>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex justify-content-center align-items-center">
                                <h3>9</h3>
                            </div>
                        </Col>
                    </Row>





                </Container>
            </div>    

    )
}

export default Portfolio;