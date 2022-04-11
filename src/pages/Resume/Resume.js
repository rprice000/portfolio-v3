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
                                        <Col lg="5" className="text-center mt-4">
                                        <h4>Sam Houston State University</h4>
                                            <p>Degree: Bachelor of Business Administration (BBA)</p>
                                            <p>Completed: May 2010</p> 
                                        </Col>
                                        <Col lg="5" className="text-center mt-4">
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
                                <Table striped bordered hover className="text-center">
                                    <thead>
                                        <tr>
                                            <th className="credentials-responsive">Issuing Organization</th>
                                            <th className="credentials-responsive">Certificate</th>
                                            <th className="credentials-responsive">Completed</th>
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
                            {/* <ListGroup> */}
                                <Row fluid>
                                    <Col>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">Visual Studio</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">Git</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">Mongo Atlas</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">MySQL Workbench</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">Insomnia API Client</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">HTML5</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">CSS3</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">BootStrap</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">Bulma</ListGroup.Item>
                                    </Col>
                                    <Col>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">Semantic UI</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">JavaScript</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">Node.js</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">Express.js</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">SQL</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">NoSQL</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">React.js</ListGroup.Item>
                                    </Col>
                                    <Col>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">GraphQL</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">MongoDB</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">Apollo Server</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">Stripe Payment</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">Redux</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">(OOP)</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">(ORM)</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">(MVC)</ListGroup.Item>
                                        <ListGroup.Item className="text-center list-responsive ps-0 pe-0">(PWA)</ListGroup.Item>
                                    </Col>
                                </Row>
                            {/* </ListGroup> */}
                        
            

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

                                
                            <Card className="mt-5 mb-2">
                                <Card.Body>
                                    <h5 className="jobtitle-responsive">Network Engineer</h5>
                                    <h5 className="jobtitle-responsive mb-2">Humble Independent School District</h5>
                                    <h5 className="jobtitle-responsive mb-2">September 2015 – Currently Employed</h5>
                                    <Card.Text className="job-responsive mt-3">
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

                            <Card className="mt-2 mb-2">
                                <Card.Body>
                                    <h5 className="jobtitle-responsive">Technical Support Technician</h5>
                                    <h5 className="jobtitle-responsive mb-2">Pflugerville Independent School District</h5>
                                    <h5 className="jobtitle-responsive mb-2">January 2013 – May 2015</h5>
                                    <Card.Text className="job-responsive mt-3">
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

                            <Card className="mt-2 mb-2">
                                <Card.Body>
                                    <h5 className="jobtitle-responsive">Dell Desktop Support</h5>
                                    <h5 className="jobtitle-responsive mb-2">Apex Systems</h5>
                                    <h5 className="jobtitle-responsive mb-2">April 2012 – December 2012</h5>
                                    <Card.Text className="job-responsive mt-3">
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

                            <Card className="mt-2 mb-2">
                                <Card.Body>
                                    <h5 className="jobtitle-responsive">PC Field Technician</h5>
                                    <h5 className="jobtitle-responsive mb-2">Netsync Network Solutions</h5>
                                    <h5 className="jobtitle-responsive mb-2">January 2011 – January 2012</h5>
                                    <Card.Text className="job-responsive mt-3">
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

                            <Card className="mt-2 mb-2">
                                <Card.Body>
                                    <h5 className="jobtitle-responsive">Participant Services Representative</h5>
                                    <h5 className="jobtitle-responsive mb-2">Mercer</h5>
                                    <h5 className="jobtitle-responsive mb-2">October 2010 – December 2010</h5>
                                    <Card.Text className="job-responsive mt-3">
                                        <ul>
                                            <li>Responsible for receiving calls from and call-outs to participants</li>
                                            <li>Assisted participants in selecting Health and Benefits packages </li>
                                            <li>Trained in several company cultures and backgrounds</li>
                                            <li>Trained in assisting participants over the phone is issues regard health and benefits selections</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="mt-2 mb-5">
                                <Card.Body>
                                    <h5 className="jobtitle-responsive">Summer System Analyst</h5>
                                    <h5 className="jobtitle-responsive mb-2">Barbers Hill Independent School District</h5>
                                    <h5 className="jobtitle-responsive mb-2"> 2004 - 2007</h5>
                                    <Card.Text className="job-responsive mt-3">
                                        <ul>
                                            <li>Summers Only May to August 2004, 2005, 2006, 2007</li>
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