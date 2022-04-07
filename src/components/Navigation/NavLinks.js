import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Header from '../Header/Header';



function NavLinks(props) {
  const tabs = [ 'About', 'Portfolio', 'Resume', 'Contact'];

  return (

       <Navbar expand="lg">
       <Navbar.Brand className='ps-5'><Header /></Navbar.Brand>
       <Navbar.Toggle />
       <Navbar.Collapse className='justify-content-end ps-5 pe-5'>
        {tabs.map((tab) => (
          <Nav key={tab}>
            <Nav.Link href={"#" + tab.toLowerCase()} onClick={() => props.handlePageChange(tab)}>
              {tab}
            </Nav.Link>
          </Nav>
        ))}
        </Navbar.Collapse>
        </Navbar> 
  );



}

export default NavLinks;
