// This is the contact page
import React from 'react';

import { Card, Row, Col, ListGroup } from 'react-bootstrap';



// Component Imports
import ContactForm from '../../components/Form/ContactForm';
// Styling Imports
import { Container} from 'react-bootstrap';
import '../Contact/Contact.css';

import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";


const Contact = () => {


    return (
      <div id="contact-page">


          <section id="contact-hero" className="mb-5 d-flex justify-content-around align-items-center">
                        <h1>
                            Contact Info
                        </h1>
                        <h3>
                            I am open to web development jobs and projects. <br></br>
                            If my portfolio has caught your attention. <br></br>
                            Please reach out to me.
                        </h3>
          </section>


          <Container>
            <ContactForm />

          <Card >
              <h2 className='d-flex justify-content-center' style={{margin: "25px"}}>Contact Info</h2>
              <Row>
                    <Col className='d-flex justify-content-center'>
                      <ListGroup variant="flush">
                        <ListGroup.Item className='d-flex justify-content-center'><h3>Email</h3></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'><a href="mailto: rtprice21@gmail.com"><MdEmail /></a></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'>rtprice21@gmail.com</ListGroup.Item>
                      </ListGroup>
                    </Col>

                    <Col className='d-flex justify-content-center'>
                      <ListGroup variant="flush">
                        <ListGroup.Item className='d-flex justify-content-center'><h3>Phone Number</h3></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'><a href="tel:512.993.9362"><FaPhoneSquareAlt /></a></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'>512.993.9362</ListGroup.Item>
                      </ListGroup>
                    </Col>

                    <Col className='d-flex justify-content-center'> 
                      <ListGroup variant="flush">
                        <ListGroup.Item className='d-flex justify-content-center'><h3>GitHub</h3></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'><a href="https://github.com/rprice000"><FaGithub /></a></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'>https://github.com/rprice000</ListGroup.Item>
                      </ListGroup>
                    </Col>

                    <Col className='d-flex justify-content-center'> 
                      <ListGroup variant="flush">
                        <ListGroup.Item className='d-flex justify-content-center'><h3>LinkedIn</h3></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'><a href="www.linkedin.com/in/reagan-price-967a25101"><AiFillLinkedin /></a></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'>www.linkedin.com/in/reagan-price-967a25101</ListGroup.Item>
                      </ListGroup>
                    </Col>

                </Row>
          </Card>
          </Container>





      </div>
    )
}


export default Contact;