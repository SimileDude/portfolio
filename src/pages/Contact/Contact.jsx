import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const [messageSent, setMessageSent] = useState(false);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   // Send the form data to your preferred API or email service here
  //   setFormData({
  //     name: '',
  //     email: '',
  //     message: '',
  //   });
  //   setMessageSent(true);
  // };

  return (
    <>
      <div className="form-wrapper">
        {/* <form className="contact-form" onSubmit={handleSubmit}> */}
        <form
          className="contact-form"
          action="https://formsubmit.co/ashkherad@gmail.com"
          method="POST"
        >
          <h1>Contact </h1>
          <h3>
            Leave me your contact info and I'll get back to you as soon as
            possible.
          </h3>
          <input
            type="hidden"
            name="_subject"
            value="ASHKHERAD.COM FORM SUBMISSION"
          />
          <input
            type="hidden"
            name="_next"
            value="http://ashkherad.com/thankyou"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <div className="input-group">
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
            <label>Name*</label>
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              required
            />
            <label>Email*</label>
          </div>
          <div className="input-group">
            <textarea
              name="message"
              // value={formData.message}
              // onChange={handleChange}
              required
            />
            <label>Message*</label>
          </div>
          {/* {!messageSent ? (
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          ) : (
            'Message has been submitted. Thank you!'
          )} */}
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;

