import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink  className="navbar-brand color:green" style={{ color: "green" }} to="/kalikapur">Kalikapur Eye Care Hospital</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink style={{fontWeight: "bold",color: "red"}}  className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink style={{fontWeight: "bold",color: "red"}} className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                <NavLink style={{fontWeight: "bold",color: "red"}} className="nav-link" to="doctors">Doctors</NavLink>
                </li>
                <li className="nav-item">
                <NavLink style={{fontWeight: "bold",color: "green"}} className="nav-link" to="/login">Login</NavLink>
                </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Navbar;