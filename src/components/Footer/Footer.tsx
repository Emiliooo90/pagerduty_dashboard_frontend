import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <a href="/">MyLogo</a>
                </div>
                <ul className="footer-links">
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 MyCompany. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
