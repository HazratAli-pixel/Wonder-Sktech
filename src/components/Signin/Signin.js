import React, { useContext, useState } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../UserContext/UserContext';

const Signin = () => {
    const {signinWithGoogle,signinWithGithub,signinWithFacebook, signIn} = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googlesignin = () => {
        signinWithGoogle()
        .then(result=>{
            setError('');
            toast("Successfuly Loged in")
            navigate(from, {replace: true})
        })
        .then(error => setError(error.message))

    }
    const facebooksignin = () => {
        signinWithFacebook()
        .then(result=>
            {
                setError('');
                toast("Successfuly Loged in")
                navigate(from, {replace: true})
            })
        .then(error => setError(error.message))
    }
    const githubsignin = () => {
        signinWithGithub()
        .then(result=>{
            setError('');
            toast("Successfuly Loged in")
            navigate(from, {replace: true})
        })
        .then(error => setError(error.message))
        
    }

    const handlelogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            form.reset();
            setError('')
            toast("Successfuly Loged in")
            navigate(from, {replace: true})
        })
        .catch(error => {
            setError(error.message)
        })
    }


    return (
        <div className='flex justify-center flex-col items-center' style={{height: "100vh"}}>
            <div className='bg-slate-400 rounded-lg p-4 sm:w-full md:w-1/2 lg:w-1/3 drop-shadow-xl '>
                <form onSubmit={handlelogin}>
                    <div className=''>
                        <h1 className='text-3xl text-center text-white font-bold'>Log in</h1>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Your Email</span>
                            </label>
                            <label className="form-control">
                                <input type="email" name='email' placeholder="abc@mail.com" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control pt-4 ">
                            <label className="font-bold">
                                <span className="label-text">Your Password</span>
                            </label>
                            <label className="form-control">
                                <input type="password" name='password' placeholder='*******' className="input input-bordered" />
                            </label>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <p>{error}</p>
                        <br />
                        <button type='submit' className='btn btn-primary w-full'>Log in</button>
                        <p className='py-4 text-white'>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                    </div>
                </form>
            </div>
            <div className='flex flex-col md:flex-row lg:justify-between gap-4 pt-10'>
                    <button type='submit' className='flex gap-1 items-center font-bold btn btn-outline' onClick={googlesignin}> <AiFillGoogleCircle className='text-red-700'/>Google</button>
                    <button type='submit' className='flex gap-1 items-center font-bold btn btn-outline' onClick={githubsignin}><FaGithub/> Github</button>
                    <button type='submit' className='flex gap-1 items-center font-bold btn btn-outline' onClick={facebooksignin}><FaFacebook/>Facebook</button>
                </div>
        </div>
    );
};

export default Signin;