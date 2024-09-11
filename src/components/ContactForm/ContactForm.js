import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-12">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="email" class="form-control" placeholder="Enter your name..." />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div class="form-group">
                        <label>E-mail Address</label>
                        <input type="email" class="form-control" placeholder="Enter email address..." />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div class="form-group">
                        <label>Service</label>
                        <select class="form-control">
                        <option>Crown And Bridges</option>
                            <option>Braces</option>
                            <option>Implants</option>
                            <option>Periodontics</option>
                            <option>Dental fillings</option>
                            <option>Teeth whitening</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div class="form-group">
                        {/* <select class="form-control">
                            <option>Crown And Bridges</option>
                            <option>Braces</option>
                            <option>Implants</option>
                            <option>Periodontics</option>
                            <option>Dental fillings</option>
                            <option>Teeth whitening</option>
                        </select> */}
                          <label>Contact Number</label>
                          <input type="phone number" class="form-control" placeholder="Enter Your Phone Number..." />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Messages</label>
                        <textarea class="form-control" placeholder='Enter your messages...' rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" class="btn appointment-btn">Book an appointment</button>
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