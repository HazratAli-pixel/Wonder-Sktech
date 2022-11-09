import React from 'react';
import { BsArrowReturnRight, BsCalendarDate, BsFillClockFill } from 'react-icons/bs';

const ReviewSections = ({data}) => {
    return (
        <div className='p-2'>
            <div className='px-1'>
                <div className='rounded-xl border-2 border-teal-400'>
                    <div className='flex bg-gradient-to-r from-teal-200 rounded-t-xl p-2'>
                        <div className='p-2'>
                            <img className='rounded-full h-14' src={data.imgUrl} alt={data.name} />
                        </div>
                        <div>
                            <h1 className='font-bold'>{data.name}</h1>
                            <p className='flex items-center'><BsCalendarDate  className='mr-2'/> {data.createdOn.slice(0,10)}</p>
                            <p className='flex items-center'><BsFillClockFill className='mr-2'/> {data.createdOn.slice(11,-5)}</p>
                        </div>
                    </div>
                    <div>
                        <div className='p-2 flex items-start'>
                            <div>
                                <h1 className='text-3xl'><BsArrowReturnRight/></h1>
                            </div>
                            <div className='px-2 py-1'>
                                <h1 className='text-justify'>{data.reviewText}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSections;