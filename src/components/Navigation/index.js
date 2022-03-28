import React from 'react';


function NavLinks(props) {
  const tabs = [ 'About', 'Portfolio', 'Resume', 'Contact'];

  return (

     

     <div>
       <ul>
        {tabs.map((tab) => (
          <li key={tab}>
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
        </ul>
        </div>
    
  );



}

export default NavLinks;
