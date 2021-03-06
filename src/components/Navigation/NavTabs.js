import React, { useState } from 'react';

// import '../Navigation/NavTabs.css';

// Component Imports
import NavLinks from './NavLinks';
// Page Imports
import Portfolio from '../../pages/Portfolio/Portfolio';
import About from '../../pages/About/About';
import Resume from '../../pages/Resume/Resume';
import Contact from '../../pages/Contact/Contact';

import '../Navigation/NavTabs.css';


function NavTabs() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {

      case "About":   return  (<About />);
      case "Portfolio":   return  (<Portfolio />);
      case "Resume":  return  (<Resume />);
      case "Contact": return (<Contact />);
      default:      return (<About />)
   }
  };

  return (
    <div>
      <NavLinks className="text-responsive" currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          
          renderPage()
        }
      </div>
    </div>
  );
}

export default NavTabs;