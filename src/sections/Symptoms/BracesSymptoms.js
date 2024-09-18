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

const BracesSymptoms = () => {
    const symptomsData = [
        {
            'icon' : iconOne,
            'title' : 'Discomfort',
            'description':'Mild pain or soreness, especially after adjustments.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Irritation',
            'description':'Sores or irritation on the inside of the lips or cheeks.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Loose or Broken Brackets/Wires',
            'description':'Detachment or damage requiring repair.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Difficulty Eating',
            'description':'Challenges with chewing certain foods.'
        },
        {
            'icon' : iconOne,
            'title' : 'Changes in Speech',
            'description':'Temporary alterations in speech or pronunciation.'
        }
    ]

    return (
        <section className='symptoms-section section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Symptoms"
                    title="sign and symptoms you need Braces"
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

export default BracesSymptoms;