// This is the contact page
import React, { useState } from 'react';




// Component Imports
import InputField from '../../components/Form/InputField';
import TextAreaField from '../../components/Form/TextAreaField';
// Styling Imports
import { Container} from 'react-bootstrap';
import '../Contact/Contact.css';

// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';

const Contact = () => {

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: ''
  });
 

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_q7mwdrq', 'portfolio_email', values, 'BRgX1YNBzyInCGnUC')
    .then(response => {
      console.log("SUCCESS!", response);
      setValues({
        fullName: '',
        email: '',
        message: ''
      });
    }, error => {
      console.log('FAILED...', error);
    })
  }

  const handleChange= (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

    return (
      <div id="contact-page">


          <section id="contact-hero" className="mb-5 d-flex justify-content-around align-items-center">
                        <h1>
                            Contact Info
                        </h1>
                        <h3>
                            I am open to web development jobs and projects. <br></br>
                            If my portfolio has caught your attention. <br></br>
                            Please reach out to me.
                        </h3>
          </section>


          <Container>
            <form onSubmit={handleSubmit}>
              <InputField handleChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="John Doe"/>
              <InputField handleChange={handleChange} label="E-mail" name="email" tyep="email" placeholder="john@example.com"/>
              <TextAreaField handleChange={handleChange} label="Your Message Here" name="message" />
              <button type="Submit">Send</button>
            </form>
          </Container>





      </div>
    )
}

export default Contact;