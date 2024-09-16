import React from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/servicePage/gallery/1.png';
import imgTwo from '../../assets/servicePage/gallery/8.jpg';
import imgThree from '../../assets/servicePage/gallery/9.jpg';
import imgFour from '../../assets/servicePage/gallery/10.jpg';
import imgFive from '../../assets/servicePage/gallery/11.jpg';
 import imgSix from '../../assets/20240907_144534.jpg';
 import imgSeven from '../../assets/smile.jpg';
 import imgEigth from '../../assets/emer_new.JPG';
 


const Gallery = () => {
    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Gallery"
                    title="Some proof about our services for you"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                />
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgTwo} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgThree} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgSix} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgOne} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFive} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFour} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgSeven} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgEigth} alt="gallery" />
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
    );
};

export default Gallery;