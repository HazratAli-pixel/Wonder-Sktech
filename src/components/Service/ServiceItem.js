import React from 'react';
import { FcBusinessman, FcClock } from 'react-icons/fc';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

import 'react-photo-view/dist/react-photo-view.css';
const ServiceItem = ({service}) => {
    return (
        <PhotoProvider>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <PhotoView key={service.imgUrl} 
                     speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                    src={service.imgUrl}>
                        <img src={service.imgUrl} alt="Shoes" className="rounded-xl" />
                    </PhotoView>
                </figure>
                <div className="card-body">
                    <h2 className="card-title  font-bold">{service.serviceName}</h2>
                    <h2 className="">{service.description.slice(0,100)}...</h2>
                    <h2 className=""><span className='font-bold'>Price:</span> {service.price} tk</h2>
                    <h2 className="flex flex-row items-center"><span className='font-bold mr-1'>Service Taken: </span> {service.totalBuy} <FcBusinessman className='ml-2'/> </h2>
                    <h2 className="flex flex-row items-center"><span className='font-bold mr-1'>Posted: </span> {service.createdOn.slice(3,24)} <FcClock className='ml-2'/> </h2>
                    
                    <div className="divider"></div>
                    <div className='flex flex-row justify-center'>
                        <div className="card-actions absolute bottom-2 right-8">
                            <Link to={`/service/${service._id}`}><button className="btn btn-primary hover:bg-white hover:text-black hover:outline-black">Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </PhotoProvider>   
    );
};

export default ServiceItem;