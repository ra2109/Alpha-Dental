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

const CrownAndBridgesSymptoms = () => {
    const symptomsData = [
        {
            'icon' : iconOne,
            'title' : 'Severe Tooth Damage',
            'description':'Crowns are needed for teeth that are extensively damaged by decay, cracks, or trauma, where a simple filling would not be sufficient to restore strength and function.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Extensive Decay or Root Canal Therapy',
            'description':'Teeth that have undergone root canal treatment or have significant decay may require crowns to protect and reinforce them.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Missing Teeth',
            'description':'Bridges are used to replace one or more missing teeth, which can cause gaps, affect chewing, and lead to shifting of adjacent teeth.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Difficulty in Chewing or Speaking:',
            'description':'Both crowns and bridges can help restore proper bite function and improve speech, which may be compromised by damaged or missing teeth.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Cosmetic Concerns',
            'description':'Crowns and bridges are also used to address cosmetic issues, such as discolored or misshapen teeth, improving overall appearance and boosting confidence' 
        }
    ]

    return (
        <section className='symptoms-section section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Symptoms"
                    title="sign and symptoms you need Crown and Bridges"
                    //description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
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

export default CrownAndBridgesSymptoms;