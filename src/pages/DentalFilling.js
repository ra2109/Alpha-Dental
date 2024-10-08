import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Gallery from '../sections/Gallery/Gallery';
import ServiceBanner from '../sections/ServiceBanner/ServiceBanner';
import Symptoms from '../sections/Symptoms/Symptoms';
import Appointment from '../sections/Appointment/Appointment';
import DentalFillingBanner from '../sections/ServiceBanner/DentalFillingBanner';

const DentalFilling = () => {
    return (
        <>
            <Navbar />
            <DentalFillingBanner />
            <Symptoms />
            <Gallery />
            <Appointment />
            <Footer />
        </>
    );
};

export default DentalFilling;