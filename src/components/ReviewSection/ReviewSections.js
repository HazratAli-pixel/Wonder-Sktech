import React from 'react';

const ReviewSections = ({data}) => {


    return (
        <div className='p-2'>
            <div className='px-2'>
                <div className='rounded-xl border-2 border-teal-400'>
                    <div className='flex bg-teal-500 rounded-t-xl p-2'>
                        <div className='p-2'>
                            <img className='rounded-full h-14' src={data.imgUrl} alt={data.name} />
                        </div>
                        <div>
                            <h1>{data.name}</h1>
                            <p>date: {data.createdOn.slice(0,10)}</p>
                            <p>time: {data.createdOn.slice(11,-5)}</p>
                        </div>
                    </div>
                    <div>
                        <div className='p-2'>
                            <div className='pl-24'>
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