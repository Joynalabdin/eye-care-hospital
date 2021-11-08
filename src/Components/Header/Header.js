import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <HashLink className="navbar-brand" to="/kaliakpur">Navbar</HashLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <HashLink className="nav-link active" aria-current="page" to="/home#home">Home</HashLink>
              <HashLink className="nav-link" to="/home#services">Services</HashLink>
              <HashLink className="nav-link" to="/home#doctors">Doctors</HashLink>
              <HashLink className="nav-link" to="/home#news">News & Blogs</HashLink>
              <HashLink className="nav-link" to="/login">Login</HashLink>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Header;