import React from 'react';
import slider from '../../images/banner-flat.jpg'


const Slider = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    );
};

export default Slider;