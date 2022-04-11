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


          <section id="contact-hero" className="mb-5 d-flex flex-column justify-content-around align-items-center">
                        <div id="headshot">
                            
                        </div>
                      
                        <h3 className="contacthero-content-responsive">I am open to web development jobs and projects.</h3>
                        <h3 className="contacthero-content-responsive">If my portfolio has caught your attention.</h3>
                        <h3 className="contacthero-content-responsive"> Please reach out to me.</h3>
                        <Container>
                        <ul class="circles">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                        </Container>
          </section>


          <Container>
            <ContactForm id="contact-form" />

          <section id="contact-info">
              <h2 className='d-flex justify-content-center' style={{marginBottom: "30px"}}>Contact Info</h2>
              <Row>
                    <Col>
                    <Card style={{height: "30vh"}} className='d-flex justify-content-center align-items-center'>
                      <ListGroup variant="flush">
                        <ListGroup.Item className='d-flex justify-content-center'><h3>Email</h3></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'><a href="mailto: rtprice21@gmail.com"><MdEmail id="mail-icon" /></a></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'>rtprice21@gmail.com</ListGroup.Item>
                      </ListGroup>
                      </Card>
                    </Col>

                    <Col>
                    <Card style={{height: "30vh"}} className='d-flex justify-content-center align-items-center'>
                      <ListGroup variant="flush">
                        <ListGroup.Item className='d-flex justify-content-center'><h3>Phone Number</h3></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'><a href="tel:512.993.9362"><FaPhoneSquareAlt id="phone-icon" /></a></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'>512.993.9362</ListGroup.Item>
                      </ListGroup>
                      </Card>
                    </Col>

                    <Col>
                    <Card style={{height: "30vh"}} className='d-flex justify-content-center align-items-center'> 
                      <ListGroup variant="flush">
                        <ListGroup.Item className='d-flex justify-content-center'><h3>GitHub</h3></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'><a href="https://github.com/rprice000"><FaGithub id="github-icon" /></a></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'>https://github.com/rprice000</ListGroup.Item>
                      </ListGroup>
                      </Card>
                    </Col>

                    <Col>
                    <Card style={{height: "30vh"}} className='d-flex justify-content-center align-items-center'> 
                      <ListGroup variant="flush">
                        <ListGroup.Item className='d-flex justify-content-center'><h3>LinkedIn</h3></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'><a href="www.linkedin.com/in/reagan-price-967a25101"><AiFillLinkedin id="linkedin-icon" /></a></ListGroup.Item>
                        <ListGroup.Item className='d-flex justify-content-center'>www.linkedin.com/in/reagan-price-967a25101</ListGroup.Item>
                      </ListGroup>
                      </Card>
                    </Col>
                </Row>
          </section>
          </Container>
      </div>
    )
}


export default Contact;