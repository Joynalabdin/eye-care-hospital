import React from 'react';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Services></Services>
            <Doctor></Doctor>
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default Home;