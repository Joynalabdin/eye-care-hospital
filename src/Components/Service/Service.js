import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name, photo,Description} = props.service
    return (
        <div className="single-service">
            <img src = {photo} alt=""/>
            <h3>Name: {name}</h3>
            <p>Description: {Description}</p>
            <div>
            <button className="btn btn-primary"> Details <small> {name}</small></button>

            </div>
        </div>
    );
};

export default Service;