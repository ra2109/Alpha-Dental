// import React from 'react';
// import './ContactForm.scss';
// import icon from '../../assets/banner/icons/Calling.png';

// import DatePickerComponent from '../DatePickerComponent';


// const ContactForm = () => {
//     return (
//         <form>
//             <div className="row">
//                 <div className="col-lg-12">
//                     <div class="form-group">
//                         <label>Name</label>
//                         <input type="email" class="form-control" placeholder="Enter your name..." />
//                     </div>
//                 </div>
//                 <div className="col-lg-12">
//                     <div class="form-group">
//                         <label>E-mail Address</label>
//                         <input type="email" class="form-control" placeholder="Enter email address..." />
//                     </div>
//                 </div>
//                 <div className="col-lg-12">
//                     <div class="form-group">
//                         <label>Service</label>
//                         <select class="form-control">
//                         <option>Crown And Bridges</option>
//                             <option>Braces</option>
//                             <option>Implants</option>
//                             <option>Periodontics</option>
//                             <option>Dental fillings</option>
//                             <option>Teeth whitening</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="col-lg-12">
//                     <div class="form-group">
//                         {/* <select class="form-control">
//                             <option>Crown And Bridges</option>
//                             <option>Braces</option>
//                             <option>Implants</option>
//                             <option>Periodontics</option>
//                             <option>Dental fillings</option>
//                             <option>Teeth whitening</option>
//                         </select> */}
//                           <label>Contact Number</label>
//                           <input type="phone number" class="form-control" placeholder="Enter Your Phone Number..." />
//                     </div>
//                 </div>
//                 <div className="col-lg-12">
//                     {/* <div class="form-group">
//                         <label for="exampleFormControlTextarea1">Messages</label>
//                         <textarea class="form-control" placeholder='Enter your messages...' rows="3"></textarea>
//                     </div> */}
//                      <div className="form-group">
//                      <label>Select Date</label>
//                      <DatePickerComponent />
//                         </div>
//                 </div>

//                 <div className="col-lg-6">
//                     <button type="submit" class="btn appointment-btn">Book an appointment</button>
//                 </div>
//                 <div className="col-lg-6">
//                     <div className="appointment-call">
//                         <div className='icon'>
//                             <img src={icon} alt="icon" />
//                         </div>
//                         <div className='call-text'>
//                             <p>Dental Emergency</p>
//                             <h6>+91 8418895603</h6>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default ContactForm;

// src/components/ContactForm.js

// fresh code
// import React, { useState } from 'react';
// import './ContactForm.scss';
// import icon from '../../assets/banner/icons/Calling.png';
// import DatePickerComponent from '../DatePickerComponent';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     service: '',
//     phone: '',
//     date: '',
//   });
//   const [errors, setErrors] = useState({
//     name: '',
//     date: '',
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//     // Clear error message for the specific field when user starts typing
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
//   };

//   // Handle date change from DatePickerComponent
//   const handleDateChange = (date) => {
//     setFormData((prevData) => ({ ...prevData, date: date }));
//     setErrors((prevErrors) => ({ ...prevErrors, date: '' }));
//   };

//   // Validate form fields
//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     if (!formData.name) {
//       newErrors.name = 'Name is required';
//       valid = false;
//     }

//     if (!formData.date) {
//       newErrors.date = 'Date is required';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   // Generate WhatsApp URL with form data
//   const generateWhatsAppLink = () => {
//     const message = `
//       *Appointment Request*\n\n
//       *Name:* ${formData.name}\n
//       *Email:* ${formData.email}\n
//       *Service:* ${formData.service}\n
//       *Phone:* ${formData.phone}\n
//       *Date:* ${formData.date ? formData.date.toDateString() : 'Not selected'}
//     `.trim();
    
//     return `https://wa.me/918418895603?text=${encodeURIComponent(message)}`;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       window.open(generateWhatsAppLink(), '_blank');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Enter your name..."
//               value={formData.name}
//               onChange={handleChange}
//             />
//             {errors.name && <p className="error-text">{errors.name}</p>}
//           </div>
//         </div>
//         <div className="col-lg-12">
//           <div className="form-group">
//             <label>E-mail Address</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Enter email address..."
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="col-lg-12">
//           <div className="form-group">
//             <label>Service</label>
//             <select
//               name="service"
//               className="form-control"
//               value={formData.service}
//               onChange={handleChange}
//             >
//               <option value="">Select a service...</option>
//               <option value="Crown And Bridges">Crown And Bridges</option>
//               <option value="Braces">Braces</option>
//               <option value="Implants">Implants</option>
//               <option value="Periodontics">Periodontics</option>
//               <option value="Dental fillings">Dental fillings</option>
//               <option value="Teeth whitening">Teeth whitening</option>
//             </select>
//           </div>
//         </div>
//         <div className="col-lg-12">
//           <div className="form-group">
//             <label>Contact Number</label>
//             <input
//               type="tel"
//               name="phone"
//               className="form-control"
//               placeholder="Enter Your Phone Number..."
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="col-lg-12">
//           <div className="form-group">
//             <label>Select Date</label>
//             <DatePickerComponent
//               value={formData.date}
//               onChange={handleDateChange}
//             />
          

//            {errors.date && <p className="error-text">{errors.date}</p>}
//           </div>
//         </div>
//         <div className="col-lg-6">
//           <button type="submit" className="btn appointment-btn">Confirm Your Appointment</button>
//         </div>
//         <div className="col-lg-6">
//           <div className="appointment-call">
//             <div className='icon'>
//               <img src={icon} alt="icon" />
//             </div>
//             <div className='call-text'>
//               <p>Dental Emergency</p>
//               <h6>+91 8418895603</h6>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

// src/components/ContactForm.js



////correct code working

// import React, { useState } from 'react';
// import './ContactForm.scss';
// import icon from '../../assets/banner/icons/Calling.png';
// import DatePickerComponent from '../DatePickerComponent';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     service: '',
//     phone: '',
//     date: '',
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Handle date change from DatePickerComponent
//   const handleDateChange = (date) => {
//     setFormData((prevData) => ({ ...prevData, date: date }));
//   };

//   // Generate WhatsApp URL with form data
//   const generateWhatsAppLink = () => {
//     const message = `
//       *Appointment Request*\n\n
//       *Name:* ${formData.name}\n
//       *Email:* ${formData.email}\n
//       *Service:* ${formData.service}\n
//       *Phone:* ${formData.phone}\n
//       *Date:* ${formData.date ? formData.date.toDateString() : 'Not selected'}
//     `.trim();
    
//     return `https://wa.me/918418895603?text=${encodeURIComponent(message)}`;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     window.open(generateWhatsAppLink(), '_blank');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Enter your name..."
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="col-lg-12">
//           <div className="form-group">
//             <label>E-mail Address</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Enter email address..."
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="col-lg-12">
//           <div className="form-group">
//             <label>Service</label>
//             <select
//               name="service"
//               className="form-control"
//               value={formData.service}
//               onChange={handleChange}
//             >
//               <option value="">Select a service...</option>
//               <option value="Crown And Bridges">Crown And Bridges</option>
//               <option value="Braces">Braces</option>
//               <option value="Implants">Implants</option>
//               <option value="Periodontics">Periodontics</option>
//               <option value="Dental fillings">Dental fillings</option>
//               <option value="Teeth whitening">Teeth whitening</option>
//             </select>
//           </div>
//         </div>
//         <div className="col-lg-12">
//           <div className="form-group">
//             <label>Contact Number</label>
//             <input
//               type="tel"
//               name="phone"
//               className="form-control"
//               placeholder="Enter Your Phone Number..."
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="col-lg-12">
//           <div className="form-group">
//             <label>Select Date</label>
//             <DatePickerComponent
//               selected={formData.date}
//               onChange={handleDateChange}
//             />
//           </div>
//         </div>
//         <div className="col-lg-6">
//           <button type="submit" className="btn appointment-btn">Book an appointment</button>
//         </div>
//         <div className="col-lg-6">
//           <div className="appointment-call">
//             <div className='icon'>
//               <img src={icon} alt="icon" />
//             </div>
//             <div className='call-text'>
//               <p>Dental Emergency</p>
//               <h6>+91 8418895603</h6>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';
import DatePickerComponent from '../DatePickerComponent';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    phone: '',
    date: null, // Initialize as null
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    date: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle date change from DatePickerComponent
  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, date: date }));
    setErrors((prevErrors) => ({ ...prevErrors, date: '' }));
  };

  // Validate form fields
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Please enter your name';
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Please enter your contact number';
      valid = false;
    }

    if (!formData.date) {
      newErrors.date = 'Please select any date ';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Generate WhatsApp URL with form data
  const generateWhatsAppLink = () => {
    const message = `
      *Appointment Request*\n\n
      *Name:* ${formData.name}\n
      *Email:* ${formData.email}\n
      *Service:* ${formData.service}\n
      *Phone:* ${formData.phone}\n
      *Date:* ${formData.date ? formData.date.toDateString() : 'Not selected'}
    `.trim();
    
    return `https://wa.me/918418895603?text=${encodeURIComponent(message)}`;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      window.open(generateWhatsAppLink(), '_blank');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label>E-mail Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email address..."
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label>Service</label>
            <select
              name="service"
              className="form-control"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="" disabled>Select a Service...</option>
              <option value="Crown And Bridges">Crown And Bridges</option>
              <option value="Braces">Braces</option>
              <option value="Implants">Implants</option>
              <option value="Periodontics">Periodontics</option>
              <option value="Dental fillings">Dental fillings</option>
              <option value="Teeth whitening">Teeth whitening</option>
            </select>
          </div>
        </div>
        <div className="col-lg-12">
          <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
            <label>Contact Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Enter Your Phone Number..."
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>
        </div>
        <div className="col-lg-12">
          <div className={`form-group ${errors.date ? 'has-error' : ''}`}>
            <label>Select Date</label>
            <DatePickerComponent
              selected={formData.date}
              onChange={handleDateChange}
            />
            {errors.date && <p className="error-text">{errors.date}</p>}
          </div>
        </div>
        <div className="col-lg-6">
          <button type="submit" className="btn appointment-btn">Book an appointment</button>
        </div>
        <div className="col-lg-6">
          <div className="appointment-call">
            <div className='icon'>
              <img src={icon} alt="icon" />
            </div>
            <div className='call-text'>
              <p>Dental Emergency</p>
              <h6>+91 8418895603</h6>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
