// import React, { useState } from 'react';
// import './Contact.scss';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     // Send the form data to your preferred API or email service here
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     });
//   };

//   return (
//     <>
//       <div className="contact-form-container">
//         <h2>Contact Me</h2>
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Contact;

import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="form-wrapper">
      <h1>Contact </h1>
      <form className="contact-form">
        <div className="input-group">
          <input type="text" name="name" id="name" required />
          <label>Name</label>
        </div>
        <div className="input-group">
          <input type="email" name="email" id="email" required />
          <label>Email</label>
        </div>
        <div className="input-group">
          <textarea name="message" id="message" required></textarea>
          <label>Message</label>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
  // <div className="contact-form-container">
  //   <div className="form-wrapper">
  //     <h2>Contact Us</h2>
  //     <form className="contact-form">
  //       <div className="input-group">
  //         <input type="text" name="name" required />
  //         <label>Name</label>
  //       </div>
  //       <div className="input-group">
  //         <input type="email" name="email" required />
  //         <label>Email</label>
  //       </div>
  //       <div className="input-group">
  //         <textarea name="message" required></textarea>
  //         <label>Message</label>
  //       </div>
  //       <button type="submit">Send Message</button>
  //     </form>
  //   </div>
  // </div>
};

export default Contact;

