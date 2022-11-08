import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const Slider = () => {
    const {user} =useContext(AuthContext);
    return (
        <div className='container mx-auto bg-slate-100 rounded-md'>
            <div className='flex justify-between flex-col md:flex-row lg:flex-row xl:flex-row bg-slate-100 p-2'>
                <div className="carousel rounded-lg w-ful md:w-2/4 lg:w-2/4 xl:w-2/4 sm:w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="assets/p5.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="assets/p6.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="assets/p1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="assets/p4.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-ful md:w-2/4 lg:w-2/4 xl:w-2/4 pl-2'>
                    <span className=''>
                        <h1 className='font-extrabold text-4xl p-2 text-center sm:text-left'>Learn faster. Stay motivated. <br /> Study smarter.</h1>
                        <p className='font-semibold text-2xl p-2 text-center sm:text-left'>All the best courses from the best instructors in the country are now on one platform.</p>
                        {
                            user? "":<div className='flex gap-2 justify-center sm:justify-start'>
                            <Link to='/signin' className='btn btn-outline'>login</Link>
                            <Link to='/signup' className='btn btn-warning'>Signup</Link>
                            </div>
                        }
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Slider;