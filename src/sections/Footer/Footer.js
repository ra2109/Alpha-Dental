import React from 'react';
import logo from '../../assets/alpha_dental.jpg';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        {
            'name' : 'About Us',
            'link' : '/about'
        },
        {
            'name' : 'Dental Services',
            'link' : '/singleservice'
        },
        {
            'name' : 'Dentist',
            'link' : '/singleservice'
        },
        {
            'name' : 'Blogs',
            'link' : '/blogs'
        },
        {
            'name' : 'FAQs',
            'link' : '/blogs'
        }
    ];

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': '+91 8418895603',
            'icon': call
        },
        {
            'title': 'Open Hour',
            'info': '10:00 AM - 07:00 PM',
            'icon': time
        },
        {
            'title': 'Clinic Address',
            'info': 'Nagmatia Road,Opp A.R.Palace. Gaya,Bihar',
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>Alpha Dental is a top-rated local practice for cosmetic, preventative, and restorative dentistry on First Hill</p>
                        <p>It's a place where your smile shines brightest</p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="https://www.facebook.com/alphadentalclinicgaya/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="/"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => 
                                    <li>
                                        <Link to={singleMenu.link}>{singleMenu.name}</Link>
                                    </li>
                                        )
                                }

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list">
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h5>{footerContact.info}</h5>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; Alpha Dental. All Right Reserved</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Terms of Use</Link></li>
                            <li><Link to='/'>Privacy Policy</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;