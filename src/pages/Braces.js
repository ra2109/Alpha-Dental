import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Gallery from '../sections/Gallery/Gallery';
import ServiceBanner from '../sections/ServiceBanner/ServiceBanner';
import Symptoms from '../sections/Symptoms/BracesSymptoms';
import Appointment from '../sections/Appointment/Appointment';
import BracesBanner from '../sections/ServiceBanner/BracesBanner';

const Braces = () => {
    return (
        <>
            <Navbar />
            <BracesBanner />
            <Symptoms />
            <Gallery />
            <Appointment />
            <Footer />
        </>
    );
};

export default Braces;