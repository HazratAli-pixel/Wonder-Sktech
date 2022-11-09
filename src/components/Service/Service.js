import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from './ServiceItem';
const Service = () => {
    const [service, setService] = useState([])

    useEffect(()=>{
        fetch("https://wondersketches-hazratali-pixel.vercel.app/service/latest/list")
        .then(response=>response.json())
        .then(data=>setService(data))
        .catch(error=>console.log(error.message))
    },[])
    return (
        <div className='pt-2'>
            <div>
                <div className='px-4 pt-2 rounded-lg'>
                    <div className='rounded-lg p-2 bg-gradient-to-r from-amber-50 via-amber-300 to-amber-50'>
                        <h1 className='text-4xl font-bold text-center'>Latest Services List</h1>
                        <h1 className='text-center'>--------------------------------------</h1>
                        <h1 className='text-center'>Last Updated three Service. Pick up from here our latest service</h1>
                    </div>
                </div>
                <div className='p-4 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            service.map(serviceitem=><ServiceItem service={serviceitem}></ServiceItem>)
                        } 
                    </div>
                </div>
                <div className='flex justify-center'>
                   <Link to='/servicelist'><button className='btn btn-success font-bold animate-pulse'>see all</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default Service;