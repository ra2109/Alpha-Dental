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

const TeethWhiteningSymptoms = () => {
    const symptomsData = [
        {
            'icon' : iconOne,
            'title' : 'Stains',
            'description':'Stains: Discoloration from coffee, tea, or tobacco.'
        },
        {
            'icon' : iconOne,
            'title' : 'Yellowing',
            'description':'Natural aging or enamel thinning.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Dullness',
            'description':' Loss of brightness over time.' 
        },
        {
            'icon' : iconOne,
            'title' : 'Uneven Color',
            'description':'Spots or patches on teeth from various factors.' 
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
                    title="sign and symptoms you need teeth whitening"
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

export default TeethWhiteningSymptoms;