import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("./services.JSON")
        .then(res=>res.json())
        .then(data=>setServices(data))
        .catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    },[])
    return (
       <div>
           <h2 className="text-primary mt-5" id="services" >Our services</h2>
            <div className="services-container">
            
            {
                services.map(service=> <Service  service={service}></Service>)
            }
            
        </div>
       </div>

    );
};

export default Services;
