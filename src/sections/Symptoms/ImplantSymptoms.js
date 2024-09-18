import React from 'react';
import './Symptoms.scss';
import IconList from '../../components/IconList/IconList';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import iconOne from '../../assets/symptoms/1.png';
import iconTwo from '../../assets/symptoms/2.png';
import iconThree from '../../assets/symptoms/3.png';
import iconFour from '../../assets/symptoms/4.png';
import iconFive from '../../assets/symptoms/5.png';
import CrownAndBridges from '../../pages/CrownAndBridges';

const ImplantSymptoms = () => {
    const symptomsData = [
        {
            'icon' : iconOne,
            'title' : 'Persistent Pain or Discomfort',
            'description':'Ongoing pain or discomfort around the implant site could suggest complications such as infection, improper placement, or implant failure.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Swelling or Redness',
            'description':'Swelling, redness, or inflammation of the gums around the implant may indicate an infection or inflammatory response.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Loose or Shifting Implant',
            'description':'If the implant feels loose or shows signs of shifting, it could signal a problem with osseointegration (the process of the implant fusing with the bone) or mechanical failure.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Gum Recession',
            'description':'Noticeable recession of the gum tissue around the implant may suggest issues with the implants placement or health of the surrounding gum tissue' 
        },
        {
            'icon' : iconOne,
            'title' : 'Changes in Bite or Alignment',
            'description':'Alterations in bite or alignment could indicate that the implant is not positioned correctly or that the surrounding teeth are shifting due to the implant.' 
        }
    ]

    return (
        <section className='symptoms-section section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Symptoms"
                    title="sign and symptoms you need Implant"
                />

                <div className="row">
                    {
                        symptomsData.map(singleSymptoms => 
                            <IconList 
                                icon={singleSymptoms.icon}
                                title={singleSymptoms.title}
                                description={singleSymptoms.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default ImplantSymptoms;