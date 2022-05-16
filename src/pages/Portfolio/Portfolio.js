// React Imports
import React from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';

// Styling Imports
import '../Portfolio/Portfolio.css'

// Component Imports



const Portfolio = () => {


    return (
            <div id="portfolio-page">
                <section id="portfolio-hero" className="mb-5 d-flex justify-content-center align-items-center">
                    <div className="flex-column d-flex justify-content-center align-items-center">
                        <h1 className="text-responsive">
                            Welcome to My Web Portfolio
                        </h1>
                    
                        <h3 className="text-responsive">
                            For more info on my projects hover a card.
                        </h3>
                    </div>
                </section>
                <Container fluid>

{/* PlaceHolder */}
                    {/* <Row>

                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex">
                                <div class="card-content-spacing card-bottom">
                                        <Card.Body>
                                            <Card.Title className="card-text-responsive"></Card.Title>
                                            <Card.Text className="card-text-responsive">
                                                
                                            </Card.Text>
                                            <Button href="" target="_blank" className="m-2 p-2">Deployed App</Button>
                                            <Button href="" target="_blank" className="m-2 p-2">GitHub Repo</Button>
                                        </Card.Body>
                                </div>
                                <div class="card-content-spacing card-cover">
                                    <h2>
                                        
                                    </h2>
                                </div>
                            </div>
                        </Col>
                    </Row> */}

{/* THIRD ROW */}
                    <Row>


                        {/* <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex">
                                <div class="card-content-spacing card-bottom">
                                        <Card.Body>
                                            <Card.Title className="card-text-responsive"></Card.Title>
                                            <Card.Text className="card-text-responsive">
                                                
                                            </Card.Text>
                                            <Button href="" target="_blank" className="m-2 p-2">Deployed App</Button>
                                            <Button href="" target="_blank" className="m-2 p-2">GitHub Repo</Button>
                                        </Card.Body>
                                </div>
                                <div class="card-content-spacing card-cover">
                                    <h2>
                                        
                                    </h2>
                                </div>
                            </div>
                        </Col> */}



                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex">
                                <div class="card-content-spacing card-bottom">
                                        <Card.Body>
                                            <Card.Title className="card-text-responsive">Project: Taskinator Pro</Card.Title>
                                            <Card.Text className="card-text-responsive">
                                                Third-party APIs are libraries or frameworks that allow you to incorporate additional 
                                                functionality into your web application. This project uses to popular Bootstrap and jQuery. 
                                                The Taskinator Pro 2 application incorporates these APIs to give a better look and feel to 
                                                the Taskinator App and to give more functionality.
                                            </Card.Text>
                                            <Button href="https://rprice000.github.io/taskinator-pro-2/" target="_blank" className="m-2 p-2">Deployed App</Button>
                                            <Button href="https://github.com/rprice000/taskinator-pro-2" target="_blank" className="m-2 p-2">GitHub Repo</Button>
                                        </Card.Body>
                                </div>
                                <div class="card-content-spacing card-cover">
                                    <h2>
                                        Taskinator Pro
                                    </h2>
                                </div>
                            </div>
                        </Col>
                    </Row>



{/* SECOND ROW */}
{/* Coding Quiz */}
                    <Row>
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex">
                                <div class="card-content-spacing card-bottom">
                                        <Card.Body>
                                            <Card.Title className="card-text-responsive">Project: Coding Quiz  </Card.Title>
                                            <Card.Text className="card-text-responsive">
                                                This project uses APIs built directly into the browser. The Coding Quiz project is
                                                a quiz where users can save their scores. The Coding Quiz app allows individuals to take a quiz,
                                                store their score in local storage, see other user scores, and clear score from local storage. 
                                                For more information please check the links below.
                                            </Card.Text>
                                            <Button href="https://rprice000.github.io/code-quiz-2/" target="_blank" className="m-2 p-2">Deployed App</Button>
                                            <Button href="https://github.com/rprice000/code-quiz-2" target="_blank" className="m-2 p-2">GitHub Repo</Button>
                                        </Card.Body>
                                </div>
                                <div class="card-content-spacing card-cover">
                                    <h2>
                                        Coding Quiz
                                    </h2>
                                </div>
                            </div>
                        </Col>

{/* Taskinator */}
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex">
                                <div class="card-content-spacing card-bottom">
                                        <Card.Body>
                                            <Card.Title className="card-text-responsive">Project: Taskinator  </Card.Title>
                                            <Card.Text className="card-text-responsive">
                                                This project uses APIs built directly into the browser and vanilla Javascript. The taskinator project is
                                                a task-tracker app. Taskinator allows individuals to organize their personal to-do 
                                                list items by using a dropdown menu to change the task status and move the task into 
                                                To Do, In Progress, and Completed lists. For more information please 
                                                check the links below.
                                            </Card.Text>
                                            <Button href="https://rprice000.github.io/taskinator-2/" target="_blank" className="m-2 p-2">Deployed App</Button>
                                            <Button href="https://github.com/rprice000/taskinator-2" target="_blank" className="m-2 p-2">GitHub Repo</Button>
                                        </Card.Body>
                                </div>
                                <div class="card-content-spacing card-cover">
                                    <h2>
                                        Taskinator
                                    </h2>
                                </div>
                            </div>
                        </Col>

                    </Row>


{/* FIRST ROW */}
                    <Row>
{/* Password Generator */}
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex">
                                <div class="card-content-spacing card-bottom">
                                    <Card.Body>
                                            <Card.Title className="card-text-responsive">Project: Password Generator</Card.Title>
                                            <Card.Text className="card-text-responsive">
                                                This project was built with basic HTML5, CSS3, and Javascript. 
                                                In the code can be found: Prompts, Object Creation and Storage, 
                                                Basic Functions, and For Loops. For more information please check the links below.
                                            </Card.Text>
                                            <Button href="https://rprice000.github.io/password-generator-2/" target="_blank" className="m-2 p-2">Deployed App</Button>
                                            <Button href="https://github.com/rprice000/password-generator-2" target="_blank" className="m-2 p-2">GitHub Repo</Button>
                                    </Card.Body>
                                </div>

                                <div class="card-content-spacing card-cover">
                                    <h2>
                                        Password Generator
                                    </h2>
                                </div>
                            </div>
                        </Col>

{/* ROBOT GLADIATORS */}
                        <Col className="card-column d-flex justify-content-center">
                            <div className="cards d-flex">
                                <div class="card-content-spacing card-bottom">
                                        <Card.Body>
                                            <Card.Title className="card-text-responsive">Project: Robot Gladiators</Card.Title>
                                            <Card.Text className="card-text-responsive">
                                                This project is built with vanilla Javascript.  The code used 
                                                Javascript Alerts, Prompts, Object creation and Storage, Basic Functions,
                                                For and While Loops to show an understanding of Javscript 
                                                fundamentals. For more information please check the links below.
                                            </Card.Text>
                                            <Button href="https://rprice000.github.io/robot-gladiators-2/" target="_blank" className="m-2 p-2">Deployed App</Button>
                                            <Button href="https://github.com/rprice000/robot-gladiators-2" target="_blank" className="m-2 p-2">GitHub Repo</Button>
                                        </Card.Body>
                                </div>
                                <div class="card-content-spacing card-cover">
                                    <h2>
                                        Robot Gladiators
                                    </h2>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>    

    )
}

export default Portfolio;