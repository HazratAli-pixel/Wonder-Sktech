import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../UserContext/UserContext';
const RightSideBar = ({setReviews,serId, reviews}) => {
    const navigate = useNavigate();
    const {user, emailverify } = useContext(AuthContext)
    const emailvery = ()=>{
        emailverify()
        .then(result => {
            toast("Verification Email send. Check your inbox / spam folder");
            console.log(result)})
    }

    const submitReview=(e)=>{
        e.preventDefault()
        const reviewText = e.target.review.value; 
        const rating = e.target.rating.value;
        const name = user.displayName;
        const userId = user.email;
        const imgUrl = user.photoURL;
        const serviceId = serId;
        const reviewdata = {reviewText, rating, name, userId, imgUrl, serviceId}
        
        fetch('https://wondersketches-hazratali-pixel.vercel.app/review/',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(reviewdata)
        })
        .then(res=>res.json())
        .then(resdata=>{
            toast("Review saved successfully")
            const newReview = [resdata,...reviews]
            setReviews(newReview)
            console.log(resdata)
        })
    }
    
    const redirectloign =()=>{
        navigate('/signin')
    }

    return (
        <div className=''>
        {
            user? (<> 
            <div className='flex justify-center p-2'>
                <img className='rounded-full' src={user.photoURL} alt="" />
            </div>
            <div>
                <h1><strong>Name : </strong>{user.displayName}</h1>
                <p><strong>Email : </strong>{user.email}</p>
                <p className='p-0 m-0 text-start font-bold'> {user.emailVerified? "Verified User":<button className='btn btn-outline' onClick={emailvery}>Verify your email</button>}</p>
            </div>
            </>):("")
        }
            
        <div className='pt-5'>
            <div className='border-2 border-red-200 p-2 rounded-lg'>
                <div>
                    <h1 className='text-center font-bold text-2xl'>Review From</h1>
                </div>
                <form action="" method='POST' onSubmit={submitReview}>
                    <div className='p-1'>
                        <label htmlFor=""><strong>Review:</strong> </label>
                        <textarea className="textarea w-full textarea-accent"  name='review' placeholder="Express your openion here....."></textarea>
                    </div>
                    
                    <div className='p-1'>
                        <label htmlFor=""><strong>Rating:</strong> </label>
                        <input type="number" placeholder="Type here ...1 to 5" min="1" max="5" name='rating' className="input input-bordered input-success w-full" />
                    </div>
                    
                    <div className='p-1 flex items-center'>
                        <label htmlFor="" className='mr-3'><strong>Rating:</strong> </label>
                        <div className="rating rating-lg">
                            <input type="radio" name="rating-4" className="rating-hidden" />
                            <input type="radio" name="rating-4" className="bg-amber-300 mask mask-star-2 ratingvalue" />
                            <input type="radio" name="rating-4" className="bg-amber-400 mask mask-star-2 ratingvalue" checked />
                            <input type="radio" name="rating-4" className="bg-amber-500 mask mask-star-2 ratingvalue" />
                            <input type="radio" name="rating-4" className="bg-amber-600 mask mask-star-2 ratingvalue" />
                            <input type="radio" name="rating-4" className="bg-amber-700 mask mask-star-2 ratingvalue" />
                        </div>
                    </div>
                    <div className='text-center py-4'>
                        {
                            user? <button className="btn btn-success">Submit</button>:<p className="text-md">For review you need to log in first <button className='text-blue-500' onClick={()=>redirectloign()}>login</button></p>
                        }
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default RightSideBar;