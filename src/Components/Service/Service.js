import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id,name, photo,Description} = props.service
    return (
        <div className="single-service">
            <img src = {photo} alt=""/>
            <h3>Name: {name}</h3>
            <p>Description: {Description}</p>
            <div>
            <Link to={ `/details/${id}`} >
                <button className="btn btn-primary"> Details{name}</button>
            </Link>

            </div>
        </div>
    );
};

export default Service;