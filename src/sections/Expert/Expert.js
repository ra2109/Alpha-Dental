import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/20240907_144534.jpg';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="EXPERTS IN DENTAL"
                                title="Top-notch dentistry, from City's top dentist."
                                description="Our vision is to be Gaya's top dental care provider renowned for excellence, patient-centered care, and cutting-edge technology. We aim to offer a welcoming environment where all ages receive top-quality dental treatment."
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Top quality dental team
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    State of the art dental services
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Transparent and Customer Focused
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Pedigree and Experience
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;