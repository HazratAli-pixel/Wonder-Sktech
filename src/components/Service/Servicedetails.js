import React, { useEffect, useState } from 'react';
import { FcBusinessman, FcClock } from 'react-icons/fc';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../CustomHooks/useTitle';
import Loading from '../ExtraComponent/Loading';
import ReviewSections from '../ReviewSection/ReviewSections';
import RightSideBar from '../RightSideBar/RightSideBar';

const Servicedetails = () => {
    useTitle('Service Details')
    const {respons} = useLoaderData()
    const [reviews, setReviews] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(()=>{
        fetch(`https://wondersketches-hazratali-pixel.vercel.app/review/service/${respons._id}`)
        .then(response=>response.json())
        .then(data=>{
            setloading(false)
            setReviews(data.respons)
        })
        .catch(error=>console.log(error.message))
    },[respons._id,setloading])

   
    return (
        <>
        {
            loading? <Loading></Loading>:
            <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3'>
                <div className='col-span-2'>
                    <div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='p-2 w-full'>
                                <div className='bg-gradient-to-r from-amber-50 via-amber-400 to-amber-50 rounded-xl'>
                                    <h1 className='font-bold p-2 text-center text-3xl'>{respons?.serviceName}</h1>
                                </div>
                            </div>
                            <div className='p-2'>
                                <img className='rounded-lg' src={respons?.imgUrl} alt="" />
                            </div>
                            <div className='p-2'>
                            
                                <h1 className='text-sm sm:text-sm md:text-base lg:text-xl xl:text-xl text-justify px-3 py-2'><strong>Details: </strong> {respons?.description}</h1>
                                <h2 className="text-sm sm:text-sm md:text-base lg:text-xl xl:text-xl text-justify px-3 py-2"><span className='font-bold'>Price:</span> {respons.price} tk</h2>
                                <h2 className="flex flex-row items-center text-sm sm:text-sm md:text-base lg:text-xl xl:text-xl text-justify px-3 py-2"><span className='font-bold mr-1'>Service Taken: </span> {respons.totalBuy} <FcBusinessman className='ml-2'/> </h2>
                                <h2 className="flex flex-row items-center text-sm sm:text-sm md:text-base lg:text-xl xl:text-xl text-justify px-3 py-2"><span className='font-bold mr-1'>Posted: </span> {respons.createdOn.slice(3,24)} <FcClock className='ml-2'/> </h2>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='py-2 w-full'>
                            <div className='bg-gradient-to-r from-amber-300 to-amber-0 flex items-center'>
                                <h1 className='font-bold px-3 py-1 text-lg'>Public Reviews </h1>
                                <p className='text-sm'>-Sorted by last review time</p>
                            </div>
                        </div>
                        {
                            reviews.length>0? 
                            (reviews.map(data=><ReviewSections key={data.serviceId} data={data}></ReviewSections>))
                            : 
                            (
                            <div className='p-2'>
                                <div className="alert alert-warning shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                        <span><strong>No reviews found!</strong> But you can be first reviewer</span>
                                    </div>
                                </div>
                            </div>
                            )
                            
                        }
                    </div>

                </div>
                <div className='col-span-1 bg-slate-200 p-2'>
                    <div className='sticky top-0'>
                     <RightSideBar setReviews={setReviews} serId={respons._id} reviews={reviews}/>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    );
};

export default Servicedetails;