import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Gallery from '../sections/Gallery/Gallery';
import ServiceBanner from '../sections/ServiceBanner/ServiceBanner';
import Symptoms from '../sections/Symptoms/GumTreatment';
import Appointment from '../sections/Appointment/Appointment';
import GumTreatmentBanner from '../sections/ServiceBanner/GumTreatmentBanner';

const GumTreatment = () => {
    return (
        <>
            <Navbar />
            <GumTreatmentBanner />
            <Symptoms />
            <Gallery />
            <Appointment />
            <Footer />
        </>
    );
};

export default GumTreatment;