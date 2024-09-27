// // import React from 'react';
// // import './Navbar.scss';
// // import logo from './../../assets/alpha_dental.jpg';
// // import {Link} from 'react-router-dom';

// // const Navbar = () => {

// //     const navbarItems = [
// //         {
// //             name: 'Home',
// //             path: '/',
// //         },
// //         {
// //             name: 'About Us',
// //             path: '/about',
// //         },
// //         // {
// //         //     name: 'Single Service',
// //         //     path: '/singleservice',
// //         // },
// //         {
// //             name: 'Services',
// //             subItems: [
// //                 { name: 'Service 1', path: '/singleservice' },
// //                 { name: 'Service 2', path: '/Braces' },
// //                 { name: 'Service 3', path: '/blogs' },
// //             ],
// //         },
// //         {
// //             name: 'Blogs',
// //             path: '/blogs',
// //         },
// //         {
// //             name: 'Contact Us',
// //             path: '/contact',
// //         }
// //     ];

// //     return (
// //         <div className='main-nav'>
// //             <div className="container">
// //                 <nav className="navbar navbar-expand-lg">
// //                     <div className="container-fluid">
// //                         {/* Logo */}
// //                         <Link className="navbar-brand" to="/">
// //                             <img src={logo} alt="logo" />
// //                         </Link>
// //                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //                         <span className="navbar-toggler-icon"></span>
// //                         </button>
// //                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //                             {/* Navbar Link */}
// //                             <ul className="navbar-nav m-auto mb-2 mb-lg-0">
// //                                { 
// //                                 navbarItems.map (navSingle =>
// //                                     <li className="nav-item">
// //                                         <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
// //                                     </li>
// //                                     ) 
// //                                 }
// //                             </ul>
                            
// //                             {/* Navbar Button */}
// //                             <div className="theme-btn">
// //                                 <Link to="/contact">Book appointment</Link>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </nav>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Navbar;


// import React, { useState } from 'react';
// import './Navbar.scss';
// import logo from './../../assets/alpha_dental.jpg';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const [openSubDropdown, setOpenSubDropdown] = useState(null);

//     const navbarItems = [
//         {
//             name: 'Home',
//             path: '/',
//         },
//         {
//             name: 'About Us',
//             path: '/about',
//         },
//         {
//             name: 'Services',
//             subItems: [
//                 {
//                     name: 'Pain Relief',
//                     subItems: [
//                         { name: 'Root Canal', path: '/singleservice' },
//                         { name: 'Extractions', path: '/tooth-Extractions' },
//                         { name: 'Periodontist', path: '/periodontics' },

//                     ],
//                 },
//                 {
//                     name: 'Cosmetic Treatment',
//                     subItems: [
//                         { name: 'Teeth Whitening', path: 'teeth-whitening' },
//                         { name: 'Braces', path: '/braces' },
//                         { name: 'Aligners', path: '' },
//                         { name: 'Dental Fillings', path: '/dental-fillings' },
//                         { name: 'Smile Make Over', path: '' },
//                         // { name: 'Veneers', path: '/cosmetic/veneers' },
                        
//                     ],
//                 },
//                 {
//                     name: 'Teeth Replacements',
//                     subItems: [
//                         { name: 'Crown & Bridges', path: '/crown-and-bridges' },
//                         { name: 'Implants', path: '/implants' },
//                     ],
//                 },
//                 {
//                     name: 'Preventive Care',
//                     subItems: [
//                         { name: 'Oral Prophylaxis', path: '' },
//                         { name: 'Teeth Cleanings', path: '' },
//                     ],
//                 },
//                 {
//                     name: 'Gum Disease Treatment',
//                     subItems: [
//                         // { name: 'Oral Prophylaxis', path: '' },
//                         // { name: 'Teeth Cleanings', path: '' },
//                     ],
//                 },
//                 {
//                     name: 'Tmj disorder',
//                     subItems: [
//                         { name: 'Medication & Oral Splint', path: '' },
//                         { name: 'Mouth Guard', path: '' },
//                     ],
//                 },
//             ],
//         },
//         {
//             name: 'Blogs',
//             path: '/blogs',
//         },
//         {
//             name: 'Contact Us',
//             path: '/contact',
//         },
//     ];

//     const handleDropdownToggle = (index) => {
//         setOpenDropdown(openDropdown === index ? null : index);
//         setOpenSubDropdown(null); // Close sub dropdown when main dropdown is toggled
//     };

//     const handleSubDropdownToggle = (index) => {
//         setOpenSubDropdown(openSubDropdown === index ? null : index);
//     };

//     return (
//         <div className='main-nav'>
//             <div className="container">
//                 <nav className="navbar navbar-expand-lg">
//                     <div className="container-fluid">
//                         {/* Logo */}
//                         <Link className="navbar-brand" to="/">
//                             <img src={logo} alt="logo" />
//                         </Link>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             {/* Navbar Links */}
//                             <ul className="navbar-nav m-auto mb-2 mb-lg-0">
//                                 {navbarItems.map((navSingle, index) => (
//                                     <li className="nav-item" key={index}>
//                                         {navSingle.subItems ? (
//                                             <>
//                                                 <span
//                                                     className="nav-link dropdown-toggle"
//                                                     role="button"
//                                                     onClick={() => handleDropdownToggle(index)}
//                                                 >
//                                                     {navSingle.name}
//                                                 </span>
//                                                 <ul className={`dropdown-menu ${openDropdown === index ? 'show' : ''}`}>
//                                                     {navSingle.subItems.map((service, serviceIndex) => (
//                                                         <li className='drop' key={serviceIndex}>
//                                                             <span
//                                                                 className="dropdown-item dropdown-toggle"
//                                                                 role="button"
//                                                                 onClick={() => handleSubDropdownToggle(`${index}-${serviceIndex}`)}
//                                                             >
//                                                                 {service.name}
//                                                             </span>
//                                                             <ul className={`dropdown-menu ${openSubDropdown === `${index}-${serviceIndex}` ? 'show' : ''}`}>
//                                                                 {service.subItems.map((subItem, subIndex) => (
//                                                                     <li key={subIndex}>
//                                                                         <Link className="dropdown-item" to={subItem.path}>{subItem.name}</Link>
//                                                                     </li>
//                                                                 ))}
//                                                             </ul>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </>
//                                         ) : (
//                                             <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
//                                         )}
//                                     </li>
//                                 ))}
//                             </ul>

//                             {/* Navbar Button */}
//                             <div className="theme-btn">
//                                 <Link to="/contact">Book appointment</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from './../../assets/alpha_dental.jpg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const location = useLocation();

    const navbarItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About Us',
            path: '/about',
        },
        {
            name: 'Services',
            subItems: [
                {
                    name: 'Pain Relief',
                    subItems: [
                        { name: 'Root Canal', path: '/singleservice' },
                        { name: 'Extractions', path: '/tooth-extractions' },
                        { name: 'Periodontist', path: '/periodontics' },
                    ],
                },
                {
                    name: 'Cosmetic Treatment',
                    subItems: [
                        { name: 'Teeth Whitening', path: '/teeth-whitening' },
                        { name: 'Braces', path: '/braces' },
                        { name: 'Aligners', path: '/' },
                        { name: 'Dental Fillings', path: '/dental-fillings' },
                        { name: 'Smile Makeover', path: '/' },
                    ],
                },
                {
                    name: 'Teeth Replacements',
                    subItems: [
                        { name: 'Crown & Bridges', path: '/crown-and-bridges' },
                        { name: 'Implants', path: '/implants' },
                    ],
                },
                {
                    name: 'Preventive Care',
                    subItems: [
                        { name: 'Oral Prophylaxis', path: '/' },
                        { name: 'Teeth Cleanings', path: '/teeth-whitening' },
                    ],
                },
                {
                    name: 'Gum Disease Treatment',
                    subItems: [],
                },
                {
                    name: 'TMJ Disorder',
                    subItems: [
                        { name: 'Medication & Oral Splint', path: '/' },
                        { name: 'Mouth Guard', path: '/' },
                    ],
                },
            ],
        },
        {
            name: 'Blogs',
            path: '/blogs',
        },
        {
            name: 'Contact Us',
            path: '/contact',
        },
    ];

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
        setOpenSubDropdown(null); // Close sub dropdown when main dropdown is toggled
    };

    const handleSubDropdownToggle = (index) => {
        setOpenSubDropdown(openSubDropdown === index ? null : index);
    };

    // Reset dropdown states on location change
    useEffect(() => {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
    }, [location]);

    return (
        <div className='main-nav'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar Links */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                {navbarItems.map((navSingle, index) => (
                                    <li className="nav-item" key={index}>
                                        {navSingle.subItems ? (
                                            <>
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={() => handleDropdownToggle(index)}
                                                >
                                                    {navSingle.name}
                                                </span>
                                                <ul className={`dropdown-menu ${openDropdown === index ? 'show' : ''}`}>
                                                    {navSingle.subItems.map((service, serviceIndex) => (
                                                        <li className='drop' key={serviceIndex}>
                                                            <span
                                                                className="dropdown-item dropdown-toggle"
                                                                role="button"
                                                                onClick={() => handleSubDropdownToggle(`${index}-${serviceIndex}`)}
                                                            >
                                                                {service.name}
                                                            </span>
                                                            <ul className={`dropdown-menu ${openSubDropdown === `${index}-${serviceIndex}` ? 'show' : ''}`}>
                                                                {service.subItems.map((subItem, subIndex) => (
                                                                    <li key={subIndex}>
                                                                        <Link className="dropdown-item" to={subItem.path}>{subItem.name}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Navbar Button */}
                            <div className="theme-btn">
                                <Link to="/contact">Book appointment</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
