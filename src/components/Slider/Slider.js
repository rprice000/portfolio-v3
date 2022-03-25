// React Imports
import React from 'react';
import { Carousel, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// Component and CSS Imports
import './Slider.css'




const Slider = () => {


    return (

            <Carousel 
            fade 
            controls={false} 
            indicators={false} 
            id="slider">
                
                <Carousel.Item>
                    <Card id="slide-1">
                        <Card.Body>
                            <Card.Title>Full Stack Web Developer</Card.Title>
                            <Card.Text>
                                Completed Rice University Coding Bootcamp
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Created over 34 deployed projects.</ListGroupItem>
                            <ListGroupItem>Proficient in MERN Stack Web Development.</ListGroupItem>
                            <ListGroupItem>Able to build web applications from the ground up -- from concept, navigation, layout, styling and programming.</ListGroupItem>
                        </ListGroup>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                <Carousel.Item>
                    <Card id="slide-2">
                        <Card.Body>
                            <Card.Title>Technology Experience</Card.Title>
                            <Card.Text>
                                Over 15 years of technology expereince. Ranging from troublshooting hardware and software platforms
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Fixed computers starting at 15 years old.</ListGroupItem>
                            <ListGroupItem>7 years of network engineering.</ListGroupItem>
                            <ListGroupItem>Full Stack Web Developer</ListGroupItem>
                        </ListGroup>
                        </Card.Body>
                    </Card>
                </Carousel.Item>


                <Carousel.Item>
                    <Card id="slide-3">
                        <Card.Body>
                            <Card.Title>Buisness Owner</Card.Title>
                            <Card.Text>
                                Completed entrepreneurship program that led to turning an idea into a small buisness.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Trained in buisness analysis, buisness planning, and business development.</ListGroupItem>
                            <ListGroupItem>Studied the role government, financial and non-profit institutions play in buisness growth.</ListGroupItem>
                            <ListGroupItem>Created a small buisness providing web development and tech services to small office law practices.Proficient in MERN Stack Web Development.</ListGroupItem>
                        </ListGroup>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                

            </Carousel>




    )
}


export default Slider;