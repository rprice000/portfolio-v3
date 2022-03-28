import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavLinks(props) {
  const tabs = [ 'About', 'Portfolio', 'Resume', 'Contact'];

  return (

      <Navbar expand="lg">

        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end pe-5'>
        <Nav variant="pills" defaultActiveKey="/about">
        {tabs.map((tab) => (
          <Nav.Item className='ps-5 pe-5' key={tab}>
            <Nav.Link
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </Nav.Link>
          </Nav.Item>
        ))}
        </Nav>
        </Navbar.Collapse>
      </Navbar>

  );



}

export default NavLinks;
