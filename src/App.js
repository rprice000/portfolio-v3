import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


// Imports from Pages folder
import About from '../src/pages/About/About';
import Portfolio from '../src/pages/Portfolio/Portfolio';
import Resume from '../src/pages/Resume/Resume';
import Contact from '../src/pages/Contact/Contact';

//Imports from Components folder
import Navigation from '../src/components/Navigation/Navigation';
import Footer from '../src/components/Footer/Footer'




const App = () => {
  return (

    <Router>
      
      <Navigation />
      <main>
      
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  
  );
}

export default App;
