import React from 'react';
import './Emergency.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EmergencyImg from '../../assets/emer_new.JPG';
import { Link } from 'react-router-dom';

const Emergency = () => {
    return (
        <section className='emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-img">
                            <img src={EmergencyImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-text">
                            <SectionTitle subTitle="Dental 24H Emergency" title="Hygenic, Friendly Treatment From Our Locally Practice." description="At Alpha Dental Clinic, there is a team of experienced dentists who are well-prepared to handle any dental emergency that comes their way. With state-of-the-art facilities and a commitment to patient health, we are available for emergency dental care in Alpha Dental Clinic. Don’t suffer in silence,reach out for help when you need it most, and let the experts at Alpha Dental Clinic restore your smile."/>

                            <div className="theme-btn">
                                <Link to='/contact'>Book an appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Emergency;