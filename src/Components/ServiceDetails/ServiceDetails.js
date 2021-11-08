import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    // const [details, setdetails]=({})
    
    const {serviceId} = useParams();
   
    useEffect(()=>{
        const url = `./services.JSON/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h1>Service Details:{serviceId} </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, magni, architecto repellat praesentium fugit tenetur expedita voluptatibus nobis sit omnis inventore? Veniam dicta asperiores consectetur reiciendis iusto in ipsam odit. Ad provident aut recusandae. Doloribus sapiente ab itaque obcaecati dicta eius alias quisquam veritatis reprehenderit! Molestias quod ut rem ullam?</p>
            
        </div>
    );
};

export default ServiceDetails;