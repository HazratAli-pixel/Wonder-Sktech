import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../CustomHooks/useTitle';

const Addservice = () => {
    useTitle('Add Service')
    const navigate = useNavigate()
    const addService = (e)=>{
        e.preventDefault()
        const sname = e.target.sname.value;
        const imgUrl = e.target.imglink.value;
        const price = e.target.price.value;
        const description = e.target.descrip.value
        const savedata = {sname, imgUrl, price, description}

        fetch('https://wondersketches-hazratali-pixel.vercel.app/service/',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(savedata)
        })
        .then(res=>res.json())
        .then(resdata=>{
            toast("Service added successfully")
            navigate('/')
        })
        
        
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        <div className='px-4 pt-2 rounded-lg'>
                            <div className='rounded-lg p-2 bg-gradient-to-r from-amber-50 via-amber-300 to-amber-50'>
                                <h1 className='text-3xl font-bold text-center'>Add Service Here</h1>
                                <h1 className='text-center'>-----------------------------------------------</h1>
                            </div>
                        </div>
                        <form action="" onSubmit={addService}>
                            <div className='flex justify-center items-center'>
                                <div className="modal-box relative">
                                    <div className=''>
                                        <h1 className='text-center text-xl font-bold'>Service Information</h1>
                                    </div>
                                    <div className='p-2'>
                                        <h1 className="font-bold">Service Name </h1>
                                        <input type="text" name='sname' placeholder="Type here" className="input input-bordered input-success w-full" required/>
                                    </div>
                                    <div className='p-2'>
                                        <h1 className="font-bold">Image Link</h1>
                                        <input type="text" name='imglink' placeholder="Type here" className="input input-bordered input-success w-full" required />
                                    </div>
                                    <div className='p-2'>
                                        <h1 className="font-bold">Price </h1>
                                        <input type="text" name='price' placeholder="Type here" className="input input-bordered input-success w-full" required/>
                                    </div>
                                    <div className='p-2'>
                                        <h1 className="font-bold">Description </h1>
                                        <textarea rows='6' name='descrip' className="textarea textarea-accent w-full" placeholder="Bio" required></textarea>
                                    </div>
                                    <div className='text-right '>
                                        <button className='btn'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addservice;