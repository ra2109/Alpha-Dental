import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Gallery from '../sections/Gallery/Gallery';
import ServiceBanner from '../sections/ServiceBanner/ServiceBanner';
import Symptoms from '../sections/Symptoms/ImplantSymptoms';
import Appointment from '../sections/Appointment/Appointment';
import ImplantBanner from '../sections/ServiceBanner/ImplantBanner';

const Implants = () => {
    return (
        <>
            <Navbar />
            <ImplantBanner />
            <Symptoms />
            <Gallery />
            <Appointment />
            <Footer />
        </>
    );
};

export default Implants;