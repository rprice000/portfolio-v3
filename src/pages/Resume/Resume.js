// React Imports
import React from 'react';
import { Container, Card, Col, Row, ListGroup, Table } from 'react-bootstrap';

// Styling Imports
import '../Resume/Resume.css'

// Component Imports
import Carousel from '../../components/Slider/Slider';




const Resume = () => {
    return (
        <div id="resume-page">
         
            <Carousel />
          
            <Container fluid className="mt-5">

{/* Education Card */}
            <Row>
                <Col lg="1">
                   {/* Spacing Column */}
                </Col>
                <Col lg="10">
                <h1 className="text-center">Education</h1>
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                        <Card.Body>
                            <Card.Text>                               
                            <Container>                           
                            <Row className="justify-content-between">
                                        <Col lg="5" className="text-center">
                                        <h4>Sam Houston State University</h4>
                                            <p>Degree: Bachelor of Business Administration (BBA)</p>
                                            <p>Completed: May 2010</p> 
                                        </Col>
                                        <Col lg="5" className="text-center">
                                        <h4>University of Houston-Victoria</h4>
                                            <p>Masters in Entrepreneurship and Economic Development (MBA)</p>
                                            <p>Completed: December 2021</p> 
                                        </Col>
                            </Row>
                            </Container>                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="1">
                    {/* Spacing Column */}
                </Col>
            </Row>

{/* Credentials Card */}
            <Row>
                <Col lg="1">
                   {/* Spacing Column */}
                </Col>
                <Col lg="10">
                <h1 className="text-center">Credentials</h1>
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                        <Card.Body>
                            <Card.Text>
                                <Table striped bordered hover className="text-center">
                                    <thead>
                                        <tr>
                                            <th>Issuing Organization</th>
                                            <th>Certificate</th>
                                            <th>Completed</th>
                                        </tr>

                                    </thead>

                                    <tbody>

                                        <tr>
                                            <td>Rice University</td>
                                            <td>Full Stack Web Developer Coding Bootcamp</td>
                                            <td>February 2022</td>
                                        </tr>

                                        <tr>
                                            <td>Coursera</td>
                                            <td>Advanced Styling and Responsive Design</td>
                                            <td>February 2020</td>
                                        </tr>

                                        <tr>
                                            <td>Coursera</td>
                                            <td>Interactivity with JavaScript</td>
                                            <td>February 2020</td>
                                        </tr>

                                        <tr>
                                            <td>Coursera</td>
                                            <td>Intro to CSS3</td>
                                            <td>February 2020</td>
                                        </tr>

                                        <tr>
                                            <td>Coursera</td>
                                            <td>Intro to HTML5</td>
                                            <td>January 2020</td>
                                        </tr>

                                        <tr>
                                            <td>Coursera</td>
                                            <td>Intro to Search Engine Optimization</td>
                                            <td>June 2018</td>
                                        </tr>

                                        <tr>
                                            <td>Cisco Systems</td>
                                            <td>CCNA Routing and Switching</td>
                                            <td>March 2010</td>
                                        </tr>

                                        <tr>
                                            <td>CompTIA</td>
                                            <td>N+ Certified </td>
                                            <td>October 2013</td>
                                        </tr>

                                        <tr>
                                            <td>CompTIA</td>
                                            <td>A+ Certified</td>
                                            <td>May 2011</td>
                                        </tr>

                                        <tr>
                                            <td>Cisco Systems</td>
                                            <td>Introduction to Telepresence Training Certificate of Completion</td>
                                            <td>February 2012</td>
                                        </tr>

                                        <tr>
                                            <td>Dell</td>
                                            <td>Desktop Certified </td>
                                            <td>May 2011</td>
                                        </tr>

                                        <tr>
                                            <td>Dell</td>
                                            <td>Laptop Certified</td>
                                            <td>May 2011</td>
                                        </tr>

                                        <tr>
                                            <td>Dell</td>
                                            <td>Network Printer Certified</td>
                                            <td>October 2011</td>
                                        </tr>

                                        <tr>
                                            <td>HP/Hewlett-Packard</td>
                                            <td>H08-Servicing HP Desktops, Workstations, and Notebooks</td>
                                            <td>September 2010</td>
                                        </tr>
                                       
                                    </tbody>
                                </Table>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="1">
                    {/* Spacing Column */}
                </Col>
                </Row>

{/* Technologies Card */}
                <Row>
                <Col lg="1">
                    {/* Spacing Column */}
                </Col>
                <Col lg="10">
                <h1 className="text-center">Technologies</h1>
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            {/* <Card.Title>Technologies</Card.Title> */}
                            <Card.Text>
                            <ListGroup>
                                <Row fluid>
                                    <Col  lg="4" xs="12">
                                        <ListGroup.Item className="text-center">Visual Studio</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Git</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Mongo Atlas</ListGroup.Item>
                                        <ListGroup.Item className="text-center">MySQL Workbench</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Insomnia API Client</ListGroup.Item>
                                        <ListGroup.Item className="text-center">HTML5</ListGroup.Item>
                                        <ListGroup.Item className="text-center">CSS3</ListGroup.Item>
                                        <ListGroup.Item className="text-center">BootStrap</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Bulma</ListGroup.Item>
                                    </Col>
                                    <Col lg="4" xs="12">
                                        <ListGroup.Item className="text-center">Semantic UI</ListGroup.Item>
                                        <ListGroup.Item className="text-center">JavaScript</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Node.js</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Express.js</ListGroup.Item>
                                        <ListGroup.Item className="text-center">SQL</ListGroup.Item>
                                        <ListGroup.Item className="text-center">NoSQL</ListGroup.Item>
                                        <ListGroup.Item className="text-center">React.js</ListGroup.Item>
                                    </Col>
                                    <Col lg="4" xs="12">
                                        <ListGroup.Item className="text-center">GraphQL</ListGroup.Item>
                                        <ListGroup.Item className="text-center">MongoDB</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Apollo Server</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Stripe Payment</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Redux</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Object Oriented Programming (OOP)</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Object Relational Mapping (ORM)</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Model View Controller (MVC)</ListGroup.Item>
                                        <ListGroup.Item className="text-center">Progressive Web Application (PWA) </ListGroup.Item>
                                    </Col>
                                </Row>
                            </ListGroup>
                        
            

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="1">
                   {/* Spacing Column */}
                </Col>
                </Row>

{/* Professional Experience Section */}
                <Row>
                <Col lg="1">
                    {/* Spacing Column */}
                </Col>
                <Col lg="10">
                <h1 className="text-center">Professional Experience</h1>
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                        <Card.Body>
                            <Card.Text>
                                
                            <Card className="m-5">
                                <Card.Body>
                                    <Card.Title>Network Engineer</Card.Title>
                                    <Card.Subtitle className="mb-2">Humble Independent School District</Card.Subtitle>
                                    <Card.Subtitle className="mb-2">September 2015 – Currently Employed</Card.Subtitle>
                                    <Card.Text>
                                        <ul>
                                            <li>Managed over 700+ Cisco/Extreme Networks switches and routers, 150+ Eaton/APC Uninterrupted Power Supplies (UPS), over 200+ Vape Sensors</li>
                                            <li>Developed Strategic Technology Plans that included the research, development, implementation, and support of new and existing technologies</li>
                                            <li>Managed and coordinated technology projects with key stakeholders including vendors, department heads, end-users, and other technology support professionals</li>
                                            <li>Maintain network infrastructure for 14 elementary schools, 6 middle schools, 3 high schools, and 3 support buildings</li>
                                            <li>Created database for workflow and process within Technology Department</li>
                                            <li>Diagnosed and repaired wide ranging technology issues from desktop support, network equipment and cabling, server administration, and hardware and software support</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="m-5">
                                <Card.Body>
                                    <Card.Title>Technical Support Technician</Card.Title>
                                    <Card.Subtitle className="mb-2">Pflugerville Independent School District</Card.Subtitle>
                                    <Card.Subtitle className="mb-2">January 2013 – May 2015</Card.Subtitle>
                                    <Card.Text>
                                        <ul>
                                            <li>Supported all technology needs of 1 high school, 1 middle school, and 3 elementary schools</li>
                                            <li>Diagnosed and repaired hardware and software issues for end-uses</li>
                                            <li>Installed and managed over 100+ software packages</li>
                                            <li>Installed over 50+ peripheral devices</li>
                                            <li>Worked with vendors, end-users, and other technology professionals on hardware and software issues</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="m-5">
                                <Card.Body>
                                    <Card.Title>Dell Desktop Support</Card.Title>
                                    <Card.Subtitle className="mb-2">Apex Systems</Card.Subtitle>
                                    <Card.Subtitle className="mb-2">April 2012 – December 2012</Card.Subtitle>
                                    <Card.Text>
                                        <ul>
                                            <li>Technology Support for the Seton Hospital environment</li>
                                            <li>Sole IT Supporter for Seton Hospitals on the weekends</li>
                                            <li>Supported over 800+ software packages</li>
                                            <li>Coordinated installations with software/hardware vendors</li>
                                            <li>Oversaw server/network monitoring and reported issues accordingly</li>
                                            <li>Created software/hardware installation guides for the Technology Team</li>
                                            <li>Remotely/personally troubleshot issues for end users</li>
                                            <li>Used BMC Remedy Ticketing Tool 10-15 Tickets per day</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="m-5">
                                <Card.Body>
                                    <Card.Title>PC Field Technician</Card.Title>
                                    <Card.Subtitle className="mb-2">Netsync Network Solutions</Card.Subtitle>
                                    <Card.Subtitle className="mb-2">January 2011 – January 2012</Card.Subtitle>
                                    <Card.Text>
                                        <ul>
                                            <li>Diagnosed and repaired PCs and laptops in the Houston Independent School District</li>
                                            <li>Sole Contact for 1/3 of Houston Independent School District hardware support</li>
                                            <li>Completed between 5-15 service tickets per day</li>
                                            <li>Trained new technicians in troubleshooting and repair of HP products</li>
                                            <li>Installed network cabling, UPS, and end-user devices for Houston ISD, Beaumont ISD, and Katy ISD</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="m-5">
                                <Card.Body>
                                    <Card.Title>Participant Services Representative</Card.Title>
                                    <Card.Subtitle className="mb-2">Mercer</Card.Subtitle>
                                    <Card.Subtitle className="mb-2">October 2010 – December 2010</Card.Subtitle>
                                    <Card.Text>
                                        <ul>
                                            <li>Responsible for receiving calls from and call-outs to participants</li>
                                            <li>Assisted participants in selecting Health and Benefits packages </li>
                                            <li>Trained in several company cultures and backgrounds</li>
                                            <li>Trained in assisting participants over the phone is issues regard health and benefits selections</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="m-5">
                                <Card.Body>
                                    <Card.Title>Summer System Analyst</Card.Title>
                                    <Card.Subtitle className="mb-2">Barbers Hill Independent School District</Card.Subtitle>
                                    <Card.Subtitle className="mb-2">Summers Only May to August 2004, 2005, 2006, 2007</Card.Subtitle>
                                    <Card.Text>
                                        <ul>
                                            <li>Updated and repaired computers - approximately 200 desktops and 1,100 laptops</li>
                                            <li>Replaced hardware - keyboards, screens, CD drives, hard drives, and printers</li>
                                            <li>Installed software products - Windows, Microsoft Office, and printer software</li>
                                            <li>Maintained and organized storage rooms</li>
                                            <li>Coordinate new equipment deployment and redistribution of existing assets</li>
                                            <li>Assisted teachers and faculty with computer related Helpdesk ticket issues</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>





                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="1">
                   {/* Spacing Column */}
                </Col>
                </Row>


            </Container>


            
        </div>
    )
}

export default Resume;