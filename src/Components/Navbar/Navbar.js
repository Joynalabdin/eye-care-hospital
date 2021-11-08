import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <NavHashLink  className="navbar-brand color:green fs-4" activeStyle={{ color: 'red' }}  style={{ color: "green" }} to="/kalikapur">Kalikapur Eye Care Hospital</NavHashLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                <NavHashLink activeStyle={{ color: 'red' }}  className="nav-link active fs-4" aria-current="page" to="/home#home">Home</NavHashLink>
                </li>
                <li className="nav-item">
                <NavHashLink  activeStyle={{ color: 'red' }} className="nav-link fs-4" to="/home#services">Services</NavHashLink>
                </li>
                <li className="nav-item">
                <NavHashLink activeStyle={{ color: 'red' }} className="nav-link fs-4" to="/home#doctors">Doctors</NavHashLink>
                </li>
                <li className="nav-item">
                <NavHashLink activeStyle={{ color: 'red' }} className="nav-link fs-4" to="/home#news">News & Blogs</NavHashLink>
                </li>
                <li className="nav-item">
                <NavHashLink activeStyle={{ color: 'red' }} className="nav-link fs-4" to="/login">Login</NavHashLink>
                </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Navbar;