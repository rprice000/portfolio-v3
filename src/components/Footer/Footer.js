// React Imports
import React from 'react';

// Component and CSS Imports
import '../Footer/Footer.css'


const Footer = () => {


    return (
        <div id="footer-component" className="pt-3 pb-3 text-center">
            <h6>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</h6>
        </div>
    )
}


export default Footer;