import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7082.504818074023!2d84.9958737!3d24.7948685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b5beb2f4209%3A0x42e370d0663009cd!2sAlpha%20Dental!5e0!3m2!1sen!2sin!4v1634089220601!5m2!1sen!2sin'

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Nagmatia Road Opp A.R Palace</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Alpha Dental is pleasure"
                            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual"/>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;