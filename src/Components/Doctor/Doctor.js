import React, { useEffect, useState } from 'react';
import Singledoctor from '../Singledoctor/Singledoctor'; 
import "./Doctor.css"

const Doctor = () => {
const [doctor,setDoctor] = useState([])

useEffect(() => {
    fetch('./doctor.json')
    .then(res=>res.json())
    .then(data=> setDoctor(data))
},[])
    return (
        
       <div className="mt-5 ">
           <h1 className="text-danger">Doctors</h1>
           <h3>Our Specialist Doctor</h3>
            <div className="doctor-container">
            
            {
                doctor.map(doctor=> <Singledoctor doctor={doctor} ></Singledoctor>)
            }
        </div>
       </div>
    );
};

export default Doctor;