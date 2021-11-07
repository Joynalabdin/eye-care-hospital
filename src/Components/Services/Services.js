import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("./services.JSON")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
       <div>
           <h2 className="text-primary mt-5">Our services</h2>
            <div className="services-container">
            
            {
                services.map(service=> <Service service={service}></Service>)
            }
            
        </div>
       </div>

    );
};

export default Services;
