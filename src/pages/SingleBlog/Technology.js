import React from 'react';
import './SingleBlog.scss';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import BlogData from '../../sections/Blogs/BlogData';
import Footer from '../../sections/Footer/Footer';

const Technology = () => {

    const {url} = useParams();
    const blog = BlogData.find(blog => blog.url === url);
    const {title, img} = blog;

    return (
        <>
            <Navbar />
            <section className='section-bg pb-70 single-blog'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                                <main className="single-blog-area">
                                <p className="single-blog-category">
                                    TECHNOLOGY
                                </p>
                                <h2 className="single-blog-title">{title}</h2>
                                <img className='single-blog-banner' src={img} alt="blog banner"/>
                                <p className="single-blog-text">
                                In recent years, advancements in technology have significantly transformed the field of dentistry, making procedures more efficient, precise, and comfortable for patients. From cutting-edge imaging systems to innovative treatment tools, new technology is revolutionizing dental operations, enhancing both the diagnostic and therapeutic aspects of care. These technological advancements not only streamline dental processes but also contribute to better patient outcomes and a more enjoyable experience.
                                 Advanced Imaging Systems: One of the most impactful technological advancements in dentistry is the development of advanced imaging systems. Digital X-rays and Cone Beam Computed Tomography (CBCT) offer high-resolution images with significantly reduced radiation exposure compared to traditional methods. These imaging technologies provide detailed views of the teeth, bone structure, and soft tissues, allowing dentists to diagnose issues with greater accuracy and plan treatments more effectively. Enhanced imaging capabilities lead to earlier detection of problems, such as cavities and oral cancers, and enable more precise and minimally invasive treatments.
                                    </p>
                                <p className='single-blog-text'>Laser Dentistry: Laser technology has made a significant impact on various dental procedures, including soft tissue surgeries, cavity removal, and teeth whitening. Lasers offer several advantages over traditional methods, including reduced discomfort, minimized bleeding, and faster healing times. The precision of lasers allows for more targeted treatment, which can improve the overall outcome and reduce the need for stitches or prolonged recovery periods. Additionally, laser dentistry can often be performed with less anesthesia, making the experience more comfortable for patients.</p>
                                <blockquote className='single-post-quote'>“In the evolving field of dentistry, technology is not just a tool; it is a catalyst for transformation, turning complex procedures into precise art and ensuring that every smile is crafted with the utmost care and innovation.”</blockquote>

                                <p className="single-blog-text">
                                CAD/CAM Technology: Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) systems have revolutionized the creation of dental restorations, such as crowns, veneers, and bridges. With CAD/CAM technology, dentists can design and fabricate these restorations in-office, often within a single visit. This advancement reduces the need for multiple appointments and temporary restorations, streamlining the treatment process and improving patient convenience. The high precision of CAD/CAM systems also ensures that restorations fit accurately, enhancing both functionality and aesthetics.
                                </p>

                                <p className="single-blog-text">
                                Teledentistry has emerged as a valuable tool for providing remote dental care and consultations. Through video conferencing and digital communication, dentists can assess patients' dental health, provide guidance, and offer preliminary diagnoses without requiring an in-person visit. This technology is particularly beneficial for individuals in remote or underserved areas, offering them access to dental care that might otherwise be unavailable. Teledentistry also facilitates follow-up care and monitoring, improving overall accessibility and patient engagement.
                                </p>
                           
                            </main>
                        </div>
                        <div className="col-lg-3">
                            <div className="blog-sidebar">
                                <div className="sidebar-subscribe mb-5">
                                    <h3 className="sidebar-heading">Get Latest Updates</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className='form-control' placeholder='Subscribe to email'/>
                                            <input className='btn btn-primary mt-1 w-100' type="button" value="Subscribe" />
                                        </div>
                                    </form>
                                </div>

                                <div className="sidebar-category mb-3">
                                    <h3 className="sidebar-heading">Categories</h3>
                                    <ul>
                                        <li><Link href="/">Technology</Link></li>
                                        <li><Link href="/">Root Canal</Link></li>
                                        <li><Link href="/">Teeth</Link></li>
                                        <li><Link href="/">Whitening</Link></li>
                                        <li><Link href="/">Dentures</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Technology;