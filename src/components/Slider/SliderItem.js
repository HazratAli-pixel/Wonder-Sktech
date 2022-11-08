import React from 'react';
import { Link } from 'react-router-dom';

const SliderItem = () => {
    return (
        <span>
            <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-5 right-5 top-1/4">
                <h1 className='text-3xl text-white font-bold'>Photo Artistry</h1>
                <p className='pt-3 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ducimus sequi molestias quas unde perspiciatis obcaecati eaque possimus saepe labore!</p>
            </div>
            <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-5 right-5 top-3/4">
                <span className=''>
                    <div className='flex gap-2 justify-center sm:justify-start'>
                        <Link to='/signin' className='btn btn-outline  text-white'>login</Link>
                        <Link to='/signup' className='btn btn-warning hover:btn-success '>Signup</Link>
                    </div>
                </span>
            </div>
        </span>
    );
};

export default SliderItem;