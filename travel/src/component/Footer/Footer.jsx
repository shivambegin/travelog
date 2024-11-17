import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h4>About Journify</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Press</li>
                        <li>Resources and Policies</li>
                        <li>Careers</li>
                        <li>Trust & Safety</li>
                        <li>Contact us</li>
                        <li>Accessibility Statement</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Explore</h4>
                    <ul>
                        <li>Write a review</li>
                        <li>Add a Place</li>
                        <li>Join</li>
                        <li>Travellers' Choice</li>
                        <li>GreenLeaders</li>
                        <li>Help Centre</li>
                        <li>Travel Articles</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Do Business With Us</h4>
                    <ul>
                        <li>Owners & DMO/CVB</li>
                        <li>Business Advantage</li>
                        <li>Sponsored Placements</li>
                        <li>Access our Content API</li>
                    </ul>
                    <h4>Get The App</h4>
                    <ul>
                        <li>iPhone App</li>
                        <li>Android App</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Journify</h4>
                    <p>Book tours and attraction tickets on <a href="#">Viator</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo">
                    <img src="tripadvisor-logo.png" alt="Tripadvisor Logo" />
                </div>
                <div className="footer-links">
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy and Cookies Statement</a>
                    <a href="#">Cookie consent</a>
                    <a href="#">Site Map</a>
                    <a href="#">How the site works</a>
                    <a href="#">Contact us</a>
                </div>
                <p className="footer-note">© 2024 Journify LLC All rights reserved.</p>
                <div className="footer-settings">
                    <select>
                        <option>₹ INR</option>
                        {/* Add more currency options as needed */}
                    </select>
                    <select>
                        <option>India</option>
                        {/* Add more country options as needed */}
                    </select>
                </div>
                <div className="footer-social">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaPinterest /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
