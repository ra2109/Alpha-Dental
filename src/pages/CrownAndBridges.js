import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Gallery from '../sections/Gallery/Gallery';
import ServiceBanner from '../sections/ServiceBanner/ServiceBanner';
import Symptoms from '../sections/Symptoms/CrownAndBridgesSymptoms';
import Appointment from '../sections/Appointment/Appointment';
import CrownAndBridgesBanner from '../sections/ServiceBanner/CrownAndBridgesBanner';

const CrownAndBridges = () => {
    return (
        <>
            <Navbar />
            <CrownAndBridgesBanner />
            <Symptoms/>
            {/* <Gallery /> */}
            <Appointment />
            <Footer />
        </>
    );
};

export default CrownAndBridges;