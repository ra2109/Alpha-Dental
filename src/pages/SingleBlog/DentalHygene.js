import React from 'react';
import './SingleBlog.scss';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import BlogData from '../../sections/Blogs/BlogData';
import Footer from '../../sections/Footer/Footer';

const DentalHygene = () => {

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
                                   HYGIENE
                                </p>
                                <h2 className="single-blog-title">{title}</h2>
                                <img className='single-blog-banner' src={img} alt="blog banner"/>
                                <p className="single-blog-text">Maintaining daily dental hygiene is essential for overall oral health and preventing common dental issues. Brushing your teeth at least twice a day with fluoride toothpaste helps remove food particles, plaque, and bacteria that accumulate on your teeth. This practice reduces the risk of cavities and gum disease by preventing plaque buildup, which can lead to more serious problems if left unchecked. Ensuring that you use the correct brushing technique and a soft-bristled toothbrush enhances the effectiveness of your oral care routine and protects the enamel of your teeth.
                                    </p>
                                <p className='single-blog-text'>
                                In addition to brushing, flossing daily is a crucial component of dental hygiene. Flossing reaches the areas between your teeth and under the gumline that a toothbrush cannot, removing plaque and debris that can contribute to tooth decay and gum disease. This habit not only cleans these hard-to-reach spaces but also promotes healthier gums and reduces the risk of inflammation and infection. Consistent flossing is key to preventing gum disease and maintaining overall oral health.
                                    </p>
                                <blockquote className='single-post-quote'>**Maintaining good dental hygiene is the foundation of a bright smile; regular brushing, flossing, and professional cleanings ensure your teeth and gums remain healthy and vibrant, reflecting your inner confidence and well-being.**</blockquote>

                                <p className="single-blog-text">
                                Mouthwash is another important tool in your dental hygiene arsenal. It helps to kill bacteria that cause bad breath and can reduce plaque buildup, contributing to a healthier mouth. Using an alcohol-free mouthwash can provide the benefits of fresh breath and antibacterial protection without causing dryness or irritation. This additional step enhances the effectiveness of your oral care routine and supports a cleaner, fresher mouth.
                                </p>

                                <p className="single-blog-text">
                                Lastly, a balanced diet and proper hydration complement your daily dental hygiene practices. Eating a diet rich in fruits, vegetables, and whole grains supports healthy teeth and gums, while avoiding sugary snacks and beverages reduces the risk of decay. Drinking plenty of water helps wash away food particles and keeps your mouth hydrated. By integrating these habits with regular brushing, flossing, and mouthwash use, you can achieve optimal dental hygiene and maintain a bright, healthy smile for years to come.
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

export default DentalHygene;