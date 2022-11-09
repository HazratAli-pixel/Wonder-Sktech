import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewSections from '../ReviewSection/ReviewSections';
import RightSideBar from '../RightSideBar/RightSideBar';

const Servicedetails = () => {
    const {respons} = useLoaderData()

    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`https://wondersketches-hazratali-pixel.vercel.app/review/service/${respons._id}`)
        .then(response=>response.json())
        .then(data=>setReviews(data.respons))
        .catch(error=>console.log(error.message))
    },[respons._id])

    console.log(reviews);
    return (
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
                                <h1 className='text-2xl text-justify px-3'><strong>Details: </strong> {respons?.description}</h1>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='py-2 w-full'>
                            <div className='bg-gradient-to-r from-amber-300 to-amber-0'>
                                <h1 className='font-bold px-3 py-1 text-lg'>Public Reviews </h1>
                            </div>
                        </div>
                        {
                            reviews.length>0?reviews.map(data=><ReviewSections data={data}></ReviewSections>): <h1>No Reviews found</h1>
                            
                        }
                    </div>

                </div>
                <div className='col-span-1'>
                    <div>
                     <h1>review sections</h1>
                     <RightSideBar/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicedetails;