import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Safety = () => {
    return (
        <section className='safty-section pt-100 section-bg section-common pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Safety"
                    title="We put the safety first"
                    description="At our core, we place the highest priority on your safety. Every decision and action we take is driven by our commitment to ensure a secure environment for our clients. We are dedicated to upholding rigorous safety standards to protect your well-being, making it our foremost concern in everything we do."
                />

                <div className="safety-video ratio ratio-16x9">
                {/* https://www.youtube.com/embed/f4jG8BCl5s0 */}
                    <iframe src="https://www.youtube.com/embed/WSSmU_2LZJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Safety;