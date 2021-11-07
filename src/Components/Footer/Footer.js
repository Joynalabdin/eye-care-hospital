import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer-link">
                    <div>
                    <h5>Contact</h5>
                        <ul>
                            <li>Phone</li>
                            <li>0172353227</li>
                            <li>Email</li>
                            <li>robel.joyna@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                    <h5>About</h5>
                        <ul>
                            <li>Doctors</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Departments</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Explore</h5>
                        <ul>
                            <li>Blog</li>
                            <li>Appointment</li>
                            <li>Shop</li>
                            <li>Protfolio</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Support</h5>
                        <ul>
                            <li>Online Support</li>
                            <li>Free Consultancy</li>
                            <li>24/7 Service</li>
                            <li>Make Call</li>
                            <li>Contact Support</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Contact</h5>
                        <hr />
                        <input className="mb-3 p-1" type="email" placeholder="Your email"/>
                        <input className="p-1" type="password" placeholder="your password" /> <br /><br /><button className="btn btn-warning">Submit</button>
                    </div>
                </div>
                <hr />
                <p className="text-center mt-4">&copy; copyright by Kalikapur Eye care Hospital- 2021</p>
            </footer>
    );
};

export default Footer;