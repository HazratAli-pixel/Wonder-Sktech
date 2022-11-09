import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../UserContext/UserContext';
const RightSideBar = ({setReviews}) => {
    const navigate = useNavigate();
    const [reviews, setreviews] = useState('')
    const [rating, setrating] = useState('')
    const {user, emailverify, logout} = useContext(AuthContext)
    console.log(user.photoURL);
    const emailvery = ()=>{
        emailverify()
        .then(result => {
            toast("Verification Email send. Check your inbox / spam folder");
            console.log(result)})
    }
    const userlogout = ()=>{
        logout();
        navigate('/')
      }

    const submitReview=(e)=>{
        e.preventDefault()
        alert("fsafasdf")
        const form = e.target
        console.log(form)

        // alert("form sumit",form.review.value)
        alert(form)

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
                <p className='py-3 m-0 text-start font-bold'> <button className='btn btn-outline' onClick={userlogout}>Logout</button></p>
            </div>
            </>):("fsa")
        }
            
        <div>
            <div className='border-2 border-red-200 p-2'>
                <form action="" method='POST'>
                    <div className='p-1'>
                        <label htmlFor=""><strong>Review:</strong> </label>
                        <textarea className="textarea w-full textarea-accent" onKeyUp={()=>setreviews()} name='review' placeholder="Express your openion here....."></textarea>
                    </div>
                    
                    <div className='p-1 flex items-center'>
                        <label htmlFor="" className='mr-3'><strong>Rating:</strong> </label>
                        <div className="rating rating-lg rating-half" name='rating'>
                            <input type="radio" name="rating-4" className="rating-hidden" />
                            <input type="radio" name="rating-4" className="bg-amber-300 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-4" className="bg-amber-300 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-4" className="bg-amber-400 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-4" className="bg-amber-400 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-4" className="bg-amber-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-4" className="bg-amber-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-4" className="bg-amber-600 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-4" className="bg-amber-600 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-4" className="bg-amber-700 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-4" className="bg-amber-800 mask mask-star-2 mask-half-2" />
                        </div>
                    </div>
                    <div className='text-center py-4'>
                        {
                            user?<button className="btn btn-warning" onClick={(e)=>submitReview(e)}>For review you need to log in first</button>:<button className="btn btn-success">For review you need to log in first</button>
                        }
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default RightSideBar;