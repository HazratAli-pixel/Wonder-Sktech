import React from 'react';
import ServiceItem from './ServiceItem';

const Service = () => {
    return (
        <div className='pt-5'>
            <div>
                <div className='px-4 pt-6 rounded-lg'>
                    <div className='rounded-lg p-2 bg-gradient-to-r from-amber-50 via-amber-300 to-amber-50'>
                        <h1 className='text-4xl font-bold text-center'>Business Website Designing Price</h1>
                        <h1 className='text-center p-2'>My Designing price is most affordable, low cost web design Service in Bangladesh offering website designing with Unbeatable “Pricing”</h1>
                    </div>
                </div>
                <div className='p-4 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <ServiceItem/>                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;