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

const GumTreatment = () => {
    const symptomsData = [
        {
            'icon' : iconOne,
            'title' : 'Loose Teeth',
            'description':'Teeth becoming loose or shifting position.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Receding Gums',
            'description':'Gums pulling away from teeth, exposing roots' 
        },
        {
            'icon' : iconOne,
            'title' : 'Bad Breath',
            'description':'Persistent halitosis despite good oral hygiene.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Gum Bleeding',
            'description':'Frequent bleeding during brushing or flossing.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Swelling or Redness',
            'description':'Swelling, redness, or inflammation of the gums around the implant may indicate an infection or inflammatory response.' 
        }
    ]

    return (
        <section className='symptoms-section section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Symptoms"
                    title="sign and symptoms you need Gum Treatment"
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

export default GumTreatment;