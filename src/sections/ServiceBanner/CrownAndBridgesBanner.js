import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceBanner.scss';
import serviceBanner from '../../assets/servicePage/1.png';
import CrownAndBridges from '../../pages/CrownAndBridges';

const CrownAndBridgesBanner = () => {
    return (
        <section className='service-banner-section section-common section-bg'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="service-banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h2>Crown And Bridges</h2>
                                    <p>Crowns and Bridges are key dental restorations. <b>Crowns</b> cover and protect damaged or weakened teeth, restoring their shape and function, while <b>bridges</b> replace one or more missing teeth by anchoring artificial teeth to adjacent healthy ones. Crowns are custom-made and fit over a prepared tooth, while bridges span gaps, helping to maintain oral health and function.</p>
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

export default CrownAndBridgesBanner;