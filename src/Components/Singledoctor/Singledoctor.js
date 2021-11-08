import React from 'react';
import "./Singledoctor.css"

const Singledoctor = (props) => {
    const {name, Specialist,image} = props.doctor;
    return (
        <div className="singledoctor">
            <div >
                <div className="card">
                <img src={image}  alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{Specialist}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Singledoctor;