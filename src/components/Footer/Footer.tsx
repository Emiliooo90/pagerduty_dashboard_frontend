import React from 'react';
import './Footer.css';
import logo from '../../assets/images/E.png'; // Adjust the path as necessary

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <a href="/">
                        <img src={logo} alt="MyLogo" /> {/* Added logo image */}
                    </a>
                </div>
                <ul className="footer-links">
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 PagerDuty. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;