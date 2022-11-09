import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Servicedetails = () => {
    const {respons} = useLoaderData()
    return (
        <div>
            <img src={respons?.imgUrl} alt="" />
            <h1>{respons?.serviceName}</h1>
            <h1>{respons?.description}</h1>
        </div>
    );
};

export default Servicedetails;