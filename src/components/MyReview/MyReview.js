import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const MyReview = () => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    
    useEffect(()=>{
        const token = localStorage.getItem('accessToken')
        console.log(token);
        const name = user.displayName
        const userId = user.email
        const url = `https://wondersketches-hazratali-pixel.vercel.app/review/user?name=${name}&userId=${userId}`
        console.log(url)
        fetch(url,{
                method:"GET",
                headers:{
                    'Content-type':'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                // localStorage.setItem('accessToken', data.token)
                // const name = 'accessToken';
                // const accessToken =data.token;
                // const exday = 10;
                console.log(data)
                // navigate('/', {replace: true})
            })
    },[])


    return (
        <div>
            <h1>My Review</h1>
        </div>
    );
};

export default MyReview;