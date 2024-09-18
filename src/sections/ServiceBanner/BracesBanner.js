import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceBanner.scss';
import serviceBanner from '../../assets/servicePage/1.png';

const BracesBanner = () => {
    return (
        <section className='service-banner-section section-common section-bg'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="service-banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h2>Braces</h2>
                                    <p>Braces are used to correct misaligned teeth and bite issues. They consist of brackets, wires, and bands that gradually shift teeth into proper alignment. Braces can improve dental function and appearance, and are suitable for both children and adults. Regular adjustments are needed for effective results.</p>
                                    <div className="theme-btn">
                                        <Link to="/contact">Book an appointment</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="service-banner-img" data-aos="fade-up" data-aos-duration="2000">
                                    <img src={serviceBanner} alt="service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BracesBanner;