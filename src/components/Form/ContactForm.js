import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [status, setStatus] = useState();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_q7mwdrq', 'portfolio_email', e.target, 'BRgX1YNBzyInCGnUC')
            .then(res => {
                console.log(res);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setStatus({ type: 'success' });
            }).catch((err)=> {
                console.log(err);
                setStatus({ type: 'error', err });
            });
    }
    

    return (
        <Card>
            <h2 className='d-flex justify-content-center' style={{marginTop: "25px"}}>Contact Form</h2>
            <form className="row" style={{ margin: "25px 85px 75px 100px"}} onSubmit={sendEmail}>
            {status?.type === 'success' && <p>Message sent successfully!</p>}
            {status?.type === 'error' && (<p>Message failed to send!</p>)}
                <label>Full Name</label>
                <input type="text" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
                <label>E-Mail</label>
                <input type="email" name="user_email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com"/>
                <label>Message</label>
                <textarea name="message" rows="4" className="form-control" value={message} onChange={(e) => setMessage(e.target.value)}  placeholder="Your message..."/>
                <input type="submit" value="Send" className="form-control btn btn-primary" 
                style={{ marginTop: "30px" }} 
                />
            </form>
        </Card>
    )
}

export default ContactForm;