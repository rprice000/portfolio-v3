// React Imports
import React from 'react';
import { Carousel, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// Component and CSS Imports
import './Slider.css'

import { TiMediaRecord } from "react-icons/ti";


const Slider = () => {


    return (
           
            <Carousel fade controls={true} indicators={false}>
                
                <Carousel.Item interval={5000}>
                    <Card className="d-flex justify-content-center align-items-center pt-5 pb-5 slider">
                        <h1 className="text-center">Resume Highlights</h1>
                        <Card.Body>
                            <Card.Title className="text-center pt-3 pb-3">
                                <h3>
                                    Full Stack Web Developer
                                </h3>
                            </Card.Title>
                            <Card.Text className="text-center pt-3 pb-3">
                                <h5 className="slidercontent-responsive">
                                    Completed Rice University Coding Bootcamp
                                </h5>
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem style={{background: "none", color:"white"}}><TiMediaRecord />  Created over 34 deployed projects.</ListGroupItem>
                                <ListGroupItem style={{background: "none", color:"white"}}><TiMediaRecord />  Proficient in MERN Stack Web Development.</ListGroupItem>
                                <ListGroupItem style={{background: "none", color:"white"}}><TiMediaRecord />  Able to build web applications from the ground up -- from concept, navigation, layout, styling and programming.</ListGroupItem>
                            </ListGroup>
                    
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <Card id="slide-2" className="d-flex justify-content-center align-items-center pt-5 pb-5 slider">
                        <h1 className="text-center">Resume Highlights</h1>
                        <Card.Body>
                            <Card.Title className="text-center pt-3 pb-3">
                                <h3>
                                    Technology Experience
                                </h3>
                            </Card.Title>
                            <Card.Text className="text-center pt-3 pb-3">
                                <h5 className="slidercontent-responsive">
                                    Over 15 years of technology expereince.
                                </h5>
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem style={{background: "none", color:"white"}}><TiMediaRecord />  Started at 15 years old fixing computers.</ListGroupItem>
                                <ListGroupItem style={{background: "none", color:"white"}}><TiMediaRecord />  7 years of network engineering.</ListGroupItem>
                                <ListGroupItem style={{background: "none", color:"white"}}><TiMediaRecord />  Full Stack Web Developer</ListGroupItem>
                            </ListGroup>
                          
                        </Card.Body>
                    </Card>
                </Carousel.Item>


                <Carousel.Item interval={5000}>
                    <Card id="slide-3" className="d-flex justify-content-center align-items-center pt-5 pb-5 slider">
                        <h1 className="text-center">Resume Highlights</h1>
                        <Card.Body>
                            <Card.Title className="text-center pt-3 pb-3">
                                <h3>
                                    Buisness Owner
                                </h3>   
                            </Card.Title>
                            <Card.Text className="text-center pt-3 pb-3">
                                <h5 className="slidercontent-responsive">
                                    Developed small business through MBA program.
                                </h5>
                            </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem style={{background: "none", color:"white"}}><TiMediaRecord />  Trained in buisness analysis, buisness planning, and business development.</ListGroupItem>
                                <ListGroupItem style={{background: "none", color:"white"}}><TiMediaRecord />  Studied the role government, financial and non-profit institutions play in buisness growth.</ListGroupItem>
                                <ListGroupItem style={{background: "none", color:"white"}}><TiMediaRecord />  Created a small buisness providing web development and tech services to small office law practices.Proficient in MERN Stack Web Development.</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                

            </Carousel>




    )
}


export default Slider;