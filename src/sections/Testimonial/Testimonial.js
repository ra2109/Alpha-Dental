import React from 'react';
import './Testimonial.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/testimonial/1.png';
import imgTwo from '../../assets/testimonial/2.png';
import imgThree from '../../assets/testimonial/3.png';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {

    const testimonails = [
        {
            'img': imgThree,
            'name': 'Benazir Shaheen',
            'description' : 'I recently had a root canal treatment (RCT) at Alpha Dental with Dr. Zainab, and it was a positive experience. The procedure was thorough, and Dr. Zainab explained each step clearly, easing my anxiety. The staff was professional and the clinic was well-equipped. Post-treatment, I experienced minimal discomfort, and follow-up care was excellent. I highly recommend Dr. Zainab for anyone needing RCT.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgTwo,
            'name': 'Dr. Rashid Moiz Khan',
            'description' : 'I had an excellent experience at Alpha Dental with Dr. Zainab for root canal treatment (RCT), scaling, and teeth whitening. Dr. Zainab was professional and thorough, explaining each procedure clearly. The clinic was clean and well-equipped, and the staff was friendly. Post-treatment, I felt no discomfort. I highly recommend Dr. Zainab for comprehensive dental care!',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgThree,
            'name': 'Dr Preeti Singh',
            'description' : 'I visited Alpha Dental in pain and received excellent care. She quickly diagnosed the issue and performed a root canal, along with scaling and whitening. The treatment relieved my discomfort, and she explained everything clearly. The staff was friendly, and the clinic was clean. I left feeling much better and satisfied with my smile. Highly recommend!',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgTwo,
            'name': 'Ahsan Kamal',
            'description' : 'I got my wisdom tooth extracted and that even within a few minutes, also painlessly with the help of advanced equipment they have at their clinic.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgThree,
            'name': 'Archana Ranjan',
            'description' : 'Recently i visited Alpha Dental Clinic Gaya, Bihar and got the best dental treatment in town."Dr.Zainab mam is an excellent dentist and a thorough professional. She has a remarkable ability to inspire confidence in her patients.She is very detailed and transparent in explaining the problems as also their resolution.overall the dentist is super cool because she explains everything to me. Dr. Zainab mam has a very good team. The Clinic is very well managed and is exceptionally clean and hygienic which is commendable. It has modern equipment and devices. Overall, a positive experience that I highly recommend to other. Thank you mam',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        // {
        //     'img': imgOne,
        //     'name': 'Bessie Cooper',
        //     'description' : 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts',
        //     'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        // },
    
    ]

    // slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                initialSlide: 3
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                        subTitle="TESTIMONIAL"
                        title="What Our Patient Say About Us . . ."
                        />
                    </div>
                    {/* <div className="col-lg-6">
                        <p className="pt-5">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts </p>
                    </div> */}
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {
                        testimonails.map(testimonail => <TestimoniCard testimonail={testimonail} />)
                    }
                </Slider>
               
            </div>
        </section>
    );
};

export default Testimonial;