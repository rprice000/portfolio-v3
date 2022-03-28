// React Imports
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// Styling Imports
import 'bootstrap/dist/css/bootstrap.css';
import '../Navigation/Navigation.css'
// Component Imports
import Header from '../Header/Header';


import { FiBookOpen } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiTrello } from "react-icons/fi";
import { FiPhoneOutgoing } from "react-icons/fi";

const Navigation = () => {
    return (
    
       <div id="nav-component">
           <Navbar expand="lg">
               
               <Navbar.Brand className='ps-5'><Header /></Navbar.Brand>
              
               <Navbar.Toggle />
               <Navbar.Collapse className='justify-content-end pe-5'>
                    <Nav defaultActiveKey="/about">
                       <Nav.Item className='ps-5 pe-5'>
                        <Nav.Link href="about"> <FiBookOpen /> About</Nav.Link>
                       </Nav.Item>
                       <Nav.Item className='ps-5 pe-5'>
                        <Nav.Link href="portfolio"> <FiBriefcase /> Portfolio</Nav.Link>
                       </Nav.Item>
                       <Nav.Item className='ps-5 pe-5'>
                        <Nav.Link href="resume"> <FiTrello /> Resume</Nav.Link>
                       </Nav.Item>
                       <Nav.Item className='ps-5 pe-5'>
                        <Nav.Link href="contact"> <FiPhoneOutgoing /> Contact</Nav.Link>
                       </Nav.Item>
                    </Nav>
               </Navbar.Collapse>
              
           </Navbar>
           <NavDropdown.Divider id="dropdown-divider" />
       </div>
     
    )
}

export default Navigation;