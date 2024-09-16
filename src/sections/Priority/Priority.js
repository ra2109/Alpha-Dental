import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import priorityImg from '../../assets/about/priority.png';
import './Priority.scss';

const Priority = () => {
    return (
        <section className='priority-section emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-img">
                            <img src={priorityImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-text">
                            <SectionTitle 
                                subTitle="OUR PRIORITY" 
                                title="Our clients are our priority"
                                description="At the core of our business is a steadfast commitment to our clients. We prioritize your needs and strive to exceed your expectations with every interaction. Our goal is to deliver exceptional service that reflects our dedication to your satisfaction. Your success is our top priority, and we are here to support and elevate your experience every step of the way."
                            />

                            <div className="theme-btn">
                                <Link to='/'>Book an appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;