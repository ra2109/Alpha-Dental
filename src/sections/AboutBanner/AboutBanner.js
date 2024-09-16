import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/banner_1.png'
import bannerTwo from '../../assets/about/banner/banner_2.png'
import pattern from '../../assets/banner/pattern.png'

const AboutBanner = () => {
    return (
        <section className='about-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>About Us</h2>
                                    <p>At Alpha Dental Clinic, our mission is to enhance your oral health and overall well-being through comprehensive, personalized dental care. We strive to create beautiful, healthy smiles for life by combining advanced dental technology with a compassionate and patient-centered approach.</p>
                                    <p>We want you to feel amazing about your oral wellness. Not just twice a year, but every time you take a bite, tell a joke, laugh.</p>
                                    <div className="theme-btn">
                                        <Link to='/contact'>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-banner-img">
                                    <img src={bannerOne} alt="about banner"/>
                                    <img src={bannerTwo} alt="about banner two"/>
                                    <img className='pattern' src={pattern} alt="about banner two"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;