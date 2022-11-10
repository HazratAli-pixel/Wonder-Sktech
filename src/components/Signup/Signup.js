import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../CustomHooks/useTitle';
import { AuthContext } from '../UserContext/UserContext';

const Signup = () => {
    useTitle("Sign Up")
    const {createUser, updateProfileInfo}= useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleregistration = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
            form.reset();
            setError('');
            const info = { displayName: name, photoURL: url};
            navigate(from, {replace:true})
            console.log("check 1");
            updateProfileInfo(info)
            .then(result => {console.log("check 2", result)})
            .catch(error => console.error(error))
            console.log("check 3");
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className='flex justify-center flex-col items-center' style={{height: "100vh"}}>
            <div className='bg-slate-400 rounded-lg p-4 sm:w-full md:w-1/2 lg:w-1/3 drop-shadow-xl '>
                <form onSubmit={handleregistration}>
                    <div className=''>
                        <h1 className='text-3xl text-center text-white font-bold'>Log in</h1>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Your Name</span>
                            </label>
                            <label className="form-control">
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Your Photo URL</span>
                            </label>
                            <label className="form-control">
                                <input type="text" placeholder="Photo URL" name="url" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Your Email</span>
                            </label>
                            <label className="form-control">
                                <input type="email" placeholder="abc@mail.com" name="email" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control pt-4 ">
                            <label className="font-bold">
                                <span className="label-text">Your Password</span>
                            </label>
                            <label className="form-control">
                                <input type="password" placeholder='*******' name="password" className="input input-bordered" />
                            </label>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <p>{error}</p>
                        <br />
                        <button type='submit' className='btn btn-primary w-full'>Register</button>
                        <p className='py-4 text-white'>Allready have an account? <Link to='/signin'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;