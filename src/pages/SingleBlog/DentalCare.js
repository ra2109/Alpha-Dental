import React from 'react';
import './SingleBlog.scss';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import BlogData from '../../sections/Blogs/BlogData';
import Footer from '../../sections/Footer/Footer';

const DentalCare = () => {

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
                                    DENTAL
                                </p>
                                <h2 className="single-blog-title">{title}</h2>
                                <img className='single-blog-banner' src={img} alt="blog banner"/>
                                
                                <p className="single-blog-text">
                                Maintaining a consistent dental care routine is essential for ensuring a vibrant and healthy smile. Regular dental check-ups play a crucial role in detecting potential issues before they escalate. By visiting your dentist every six to twelve months, you not only safeguard your oral health but also benefit from professional cleanings that remove plaque and tartar build-up. These cleanings help prevent gum disease and cavities, contributing to a brighter, healthier smile. Routine visits also allow your dentist to identify and address any concerns early on, ensuring that your smile remains radiant for years to come.
                                </p>

                                <p className='single-blog-text'>
                                In addition to professional care, daily oral hygiene practices are vital for keeping your teeth and gums in top condition. Brushing twice a day with fluoride toothpaste helps remove food particles and plaque, while flossing daily reaches the areas between your teeth that a toothbrush can't. Incorporating mouthwash into your routine can further combat bacteria and freshen your breath. Consistency in these habits not only maintains your oral health but also enhances the overall appearance of your smile, making it brighter and more attractive.
                                </p>
                                <blockquote className='single-post-quote'>" The best accessory you can wear is a bright, healthy smile. Regular visits to the dentist are the key to keeping it shining"</blockquote>

                                <p className="single-blog-text">
                                A balanced diet and avoiding detrimental habits also play a significant role in dental health. Eating a diet rich in fruits, vegetables, and whole grains supports healthy teeth and gums, while limiting sugary snacks and beverages reduces the risk of decay. Additionally, steering clear of tobacco products helps prevent gum disease and oral cancer. By combining these practices with regular dental visits and good daily habits, you can ensure that your smile stays both bright and beautiful.
                                </p>
                                <p className="single-blog-text">
                                In addition to these proactive measures, staying hydrated and maintaining overall health are essential for a vibrant smile. Drinking plenty of water throughout the day helps rinse away food particles and bacteria, reducing the risk of bad breath and promoting a healthier mouth environment. Moreover, overall wellness practices, such as managing stress and getting adequate sleep, can positively impact your oral health. Stress can lead to teeth grinding and other dental issues, while proper rest supports your body’s natural repair processes. By integrating hydration and a healthy lifestyle with regular dental care and good oral hygiene practices, you enhance not just the brightness of your smile, but its longevity and health.
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

export default DentalCare;