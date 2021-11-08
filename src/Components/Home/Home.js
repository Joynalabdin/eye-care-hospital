import React from 'react';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import News from '../News/News';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div id="home">
            <Slider></Slider>
            <Services></Services>
            <Doctor></Doctor>
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default Home;