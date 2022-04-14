// This is the home page
import React from 'react';

// Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Component and CSS Imports
import '../About/About.css'
import ParticleBackground from '../../components/Particles/ParticleBackground';



const About = () => {
    return (
        <div id="about-page">
            
           <ParticleBackground />

           <Container fluid className="mt-5">

            <Row>
            <Col lg="1">
                    {/* Spacing Column */}
            </Col>
            <Col>
                <h1 className="aboutstart-responsive">A little about me . . .</h1>
            </Col>
            </Row>

{/* Test Row */}
            {/* <Row className="mt-5">
            <Col lg="5">
                   
            </Col>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="text-end mb-5">test</h2>
                    <p className="mb-5">
                        I am a Web Developer able to build web applications from the ground 
                        up -- from concept, navigation, layout, styling and programming. 
                        Skilled at writing well-designed, testable and efficient code using 
                        current best practices in web development. Fast learner, hard worker 
                        and team player who is proficient in an array of web development tools.
                    </p>
                </Col>
                <Col lg="2">
                    
                </Col>
            </Row> */}

{/* Tech Nerd */}
            <Row className="mt-5">
            <Col lg="5">
                    {/* Spacing Column */}
            </Col>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="abouttitle-responsive text-end mb-5">Tech Nerd</h2>
                    <p className="aboutcontent-responsive mb-5">
                        I love the quote from Aurthur C. Clarke, “Any sufficiently advanced technology is 
                        indistinguishable from magic.”  This has always been true for me.  Growing up I have
                        always been drawn to the latest gizmo or gadegt.  I once took apart my Nintendo 64 controller
                        just to see what was inside.  In doing so I lost the use of my Nintendo
                        but I gained the understanding of how the controller worked. 
                    </p>
                </Col>
                <Col lg="2">
                    {/* Spacing Column */}
                </Col>
            </Row>

{/* Business Owner */}
            <Row className="mt-5">
            <Col lg="5">
                   
            </Col>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="abouttitle-responsive text-end mb-5">Business Owner</h2>
                    <p className="aboutcontent-responsive mb-5">
                        After working in tech for 10 years, I honestly felt like I was 
                        not being challenged enough in my work.  Don’t get me wrong I 
                        love what I do.  To me starting a small business I just wanted 
                        to see what my limitations were and if I would be able to achieve 
                        this task.  As of March 15, 2022, I can now say I am a business owner. 
                    </p>
                    {/* NEED TO ADD LINK TO BUSINESS WEBSITE */}
                </Col>
                <Col lg="2">
                    
                </Col>
            </Row>
            
{/* Gaming */}
            <Row className="mt-5">
            <Col lg="5">
                    {/* Spacing Column */}
            </Col>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="abouttitle-responsive text-end mb-5">Gamer</h2>
                    <p className="aboutcontent-responsive mb-5">
                        From playing on the regular Nintendo when I was a kid to now playing 
                        on a gaming PC with a GTX 1080 Ti graphics card; gaming has always been 
                        a part of my life.   Gaming has always been a stress reliever and a way 
                        to connect with friends.  If you are a gamer like me, I would love to 
                        talk to you about what games you play and the systems you play on.  
                    </p>
                </Col>
                <Col lg="2">
                    {/* Spacing Column */}
                </Col>
            </Row>

{/* Drawing and Comic Books */}
            <Row className="mt-5">
            <Col lg="5">
                    {/* Spacing Column */}
            </Col>
            <Col className="block-example border-bottom border-dark">
                    <h2 className="abouttitle-responsive text-end mb-5">Artist and Writer</h2>
                    <p className="aboutcontent-responsive mb-5">
                        Whenever I have free time, I always find myself writing 
                        and drawing.  Although I am not a published author, one day 
                        I do plan to create my own comic book.  I never thought 
                        having comic book knowledge would be advantageous.  But 
                        since Marvel, DC, and other comics becoming mainstream I 
                        now have friends and colleagues asking me what’s going on 
                        in the latest movie or TV show.  If you have questions please 
                        let me know.
                    </p>
                {/* Modal or Link to pictures you have drawn */}
                </Col>
                <Col lg="2">
                    {/* Spacing Column */}
                </Col>
            </Row>

           </Container>
           
        </div>
    )
}

export default About;