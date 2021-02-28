import React, { useLayoutEffect } from 'react';
import "./Footer.css";
import Image10 from "../../assets/image10.jpg";
import Image11 from "../../assets/image11.jpg";
import Image12 from "../../assets/image12.jpg";
import Instagram from "../../assets/instagram.svg";
import { HashLink as Link } from 'react-router-hash-link';



function Footer() {

    function handleClick(e) {
        e.preventDefault();
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
      }

    return (

        <footer className="footer-container">
            <div className="footer-item-container">
                    <div className="footer-item">
                        <div className="footer-item-title">
                            Company
                        </div>
                        <ul className="footer-item-content">
                            <li>About Company</li>
                            <li>Company Services</li>
                            <li>Job Opportunities</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <div className="footer-item-title">
                            Customer
                        </div>
                        <ul className="footer-item-content">
                            <li>Client Support</li>
                            <li>Pricing Packages</li>
                            <li>Company History</li>
                            <li>Our Process</li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <div className="footer-item-title">
                            Get in touch
                        </div>
                        <ul className="footer-item-content">
                            <address>
                                27 Eden walk eden centre <br />
                                Orchad View, Paris, France<br /><br />
                            </address>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            &ensp;<a href="call to: +1 234 5678910" id="footer-contact">+1 234 5678910</a><br />
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            &ensp;<a href="mail to: info@yourdomain.com" id="footer-contact">info@yourdomain.com</a>


                        </ul>
                    </div>
                    <div className="footer-item">
                        <div className="footer-item-title">
                            Follow us on Instagram
                    </div>
                        <div className="footer-item-content">
                            <div className="footer-item-content-images">
                                <img src={Image10}></img>
                                <img src={Image11}></img>
                                <img src={Image12}></img>
                            </div>
                            <div className="footer-item-instagram">
                                <img src={Instagram} width="30" height="30"></img>
                            &ensp;<a>FOLLOW INSTAGRAM</a>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="footer-up-arrow">
                <Link >
                    <i class="fa fa-arrow-circle-up" aria-hidden="true" onClick={handleClick}></i>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;