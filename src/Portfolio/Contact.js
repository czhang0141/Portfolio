import React from 'react';
// import "./Contact.css";

function Contact() {
  return (
    <div className='contact'>
      <div className='row'>
        <div className='col-xs-12'>
        <h3>Get in Touch</h3>
        </div>
      <form>
        <div className='row'>
        <div className='col-xs-12'>
          <input placeholder='Name' type='text' id="name" required />
        {/* </div> */}
        {/* <div className='col-xs-6'> */}
          <input placeholder='Email'  type='text' id='email' required />
        </div>
        </div>
        <input placeholder='Message' type='text' id='message' required/>
      </form>
    </div>
    </div>
  );
}

export default Contact;