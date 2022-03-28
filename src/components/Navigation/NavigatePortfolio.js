import React, { useState } from 'react';



import Header from '../Header/Header';
import '../Navigation/Navigation.css'
import NavLinks from './index';
import About from '../../pages/About/About';
import Portfolio from '../../pages/Portfolio/Portfolio';
import Contact from '../../pages/Contact/Contact';
import Resume from '../../pages/Resume/Resume'

function NavigatePortfolio() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
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
      <div id="navbackground">
        <Header />

        <NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
          {
            // Render the component returned by 'renderPage()'
            renderPage()
            //
          }
        </div>
      </div>
    </div>
  );
}

export default NavigatePortfolio;