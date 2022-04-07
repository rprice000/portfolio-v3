import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';


import NavTabs from '../src/components/Navigation/NavTabs';
import Footer from '../src/components/Footer/Footer';




const App = () => {
  return (
  
    <Router>
      <NavTabs />
    
      <Footer />
    </Router>
  
  );
}

export default App;
