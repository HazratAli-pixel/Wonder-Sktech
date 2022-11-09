import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../UserContext/UserContext';
const RightSideBar = () => {
    const navigate = useNavigate();
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

    return (
        <div>
            <div className='flex justify-center p-2'>
                <img className='rounded-full' src={user.photoURL} alt="" />
            </div>
            <div>
                <h1><strong>Name : </strong>{user.displayName}</h1>
                <p><strong>Email : </strong>{user.email}</p>
                <p className='p-0 m-0 text-start font-bold'> {user.emailVerified? "Verified User":<button className='btn btn-outline' onClick={emailvery}>Verify your email</button>}</p>
                <p className='py-3 m-0 text-start font-bold'> <button className='btn btn-outline' onClick={userlogout}>Logout</button></p>
            </div>
        </div>
    );
};

export default RightSideBar;