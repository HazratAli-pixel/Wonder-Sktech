import React from 'react';
import ServiceItem from './ServiceItem';

const Service = () => {
    return (
        <div className='pt-2'>
            <div>
                <div className='px-4 pt-2 rounded-lg'>
                    <div className='rounded-lg p-2 bg-gradient-to-r from-amber-50 via-amber-300 to-amber-50'>
                        <h1 className='text-4xl font-bold text-center'>Services</h1>
                        <h1 className='text-center'>--------------------------------------</h1>
                        <h1 className='text-center'>Last Updated three Service. Pick up from here our latest service</h1>
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