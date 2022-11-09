import React from 'react';
import Section1 from '../Section/Section1';
import Section2 from '../Section/Section2';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className='container mx-auto bg-slate-100 rounded-md'>
                <Service/>
                <Section1></Section1>
                <Section2/>
            </div>
            
        </div>
    );
};

export default Home;