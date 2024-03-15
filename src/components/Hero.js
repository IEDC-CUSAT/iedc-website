import React, { useState } from "react";
import logo from "../asssets/img/logo.png";
import Hero1 from '../asssets/img/hero/hero1.jpg'
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" data-navbar-on-scroll="data-navbar-on-scroll">
                <div className="container">
                    <a href="index.html"><img src={logo} className="h-[70px]" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="#about">About Us</a></li>
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="#mission">Mission</a></li>
                            <li className="nav-item"><a className="nav-link " aria-current="page" href="#vision">Vision</a></li>
                        </ul>
                        <div className="d-flex ms-lg-4 mb-2"><a className="btn btn-warning" href="#events">Events</a></div>
                    </div>
                </div>
            </nav>

            <section id="home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-md-start text-center">
                            <h1 className="mb-4 fs-9 fw-bold">IEDC CUSAT</h1>
                            <p className="mb-6 lead text-secondary">Empowering innovation and entrepreneurship for a thriving economy. <br
                                className="d-none d-xl-block" />Unlocking the Entrepreneur in You. <br className="d-none d-xl-block" />Join us!
                            </p>
                            <div className="text-center text-md-start">
                                <div className="header-social-links d-flex align-items-center">
                                    <a href="https://www.instagram.com/iedc.cusat/" target="blank" className="instagram m-0"><i
                                        className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/company/iedc-cusat/" target="blank" className="linkedin"><i
                                        className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-end"><img className="pt-7 pt-md-0 img-fluid" src={Hero1} alt="" /></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
