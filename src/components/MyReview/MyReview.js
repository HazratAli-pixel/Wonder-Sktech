import React, { useContext, useEffect, useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { MdAutoDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../CustomHooks/useTitle';
import Loading from '../ExtraComponent/Loading';
import { AuthContext } from '../UserContext/UserContext';


const MyReview = () => {
    useTitle('My Review')
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [flag, setflag] = useState(true)
    const [loading, setloading] = useState(true)
    const [editReview, setEditReview] = useState('')
    const [upreview, setupreview] = useState('')
    
    useEffect(()=>{
        const token = localStorage.getItem('accessToken')
        const userId = user.email
        const url = `https://wondersketches-hazratali-pixel.vercel.app/review/user?userId=${userId}`
        fetch(url,{
                method:"GET",
                headers:{
                    'Content-type':'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(data =>{
                setloading(false)
                setReviews(data.respons)
            })
    },[flag])

    const deletereview = (id)=>{
        const url = `https://wondersketches-hazratali-pixel.vercel.app/review/${id}`
        fetch(url,{
                method:"delete",
                headers:{
                    'Content-type':'application/json',
                }
            })
            .then(res=>res.json())
            .then(data =>{
                setflag(!flag)
                setloading(false)
                toast("Delete Successful")
            })
    }
    const editreview = (id)=>{
        const url = `https://wondersketches-hazratali-pixel.vercel.app/review/single/${id}`
            fetch(url)
            .then(res=>res.json())
            .then(data =>{
                setEditReview(data.respons)
                setflag(!flag)
                setloading(false)
            })
    }

    const updateReviews = (id)=>{
        const updata = {reviewText:upreview}
        const url = `https://wondersketches-hazratali-pixel.vercel.app/review/${id}`
        fetch(url,{
                method:"PATCH",
                headers:{
                    'Content-type':'application/json',
                },
                body:JSON.stringify(updata)
            })
            .then(res=>res.json())
            .then(data =>{
                setflag(!flag)
                setloading(false)
                toast("Update Successful")
            })
    }
    return (
        <div>
            <div className='p-2'>
                <div>
                    <div>
                        <div className='px-4 pt-2 rounded-lg'>
                            <div className='rounded-lg p-2 bg-gradient-to-r from-amber-50 via-amber-300 to-amber-50'>
                                <h1 className='text-3xl font-bold text-center'>All Reviews are here</h1>
                                <h1 className='text-center'>-----------------------------------------------</h1>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table table-compact w-full">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Review</th>
                                    <th>Date</th>
                                    <th>Service Id</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    loading? <Loading/>:reviews.length>0?
                                    reviews.map((info,index)=>{
                                        return <tr>
                                            <th>{index+1}</th>
                                            <td>{info?.reviewText?.slice(0,100)}</td>
                                            <td>{info?.createdOn?.slice(0,10)} {info?.createdOn?.slice(12,22)}</td> 
                                            <td>{info?.serviceId}</td>
                                            <td>{info?.rating}</td>
                                            <td className='flex flex-row gap-3 items-center justify-center'> <span onClick={()=>deletereview(info?._id)}><MdAutoDelete/></span> <label htmlFor="my-modal-3" onClick={()=>{ 
                                                console.log(info?._id)
                                                editreview(info?._id)}}><BiEditAlt/></label> </td>
                                        </tr>
                                    }):<div className='p-2'>
                                    <div className="alert alert-warning shadow-lg">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                            <span><strong>No reviews were added!</strong> <Link to='servicelist'></Link> </span>
                                        </div>
                                    </div>
                                </div>
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className='flex gap-2 flex-col sm:flex-row md:flex-row items-center'>
                            <div>
                                <img className='rounded-full' src={editReview[0]?.imgUrl} alt="f" />
                            </div>
                            <div className=''>
                                <div className='flex items-center'>
                                    <h1 className="font-bold p-1">Name : </h1>
                                    <h1 className="text-sm p-1"> {editReview[0]?.name}</h1>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className="font-bold p-1">Email : </h1>
                                    <h1 className="text-sm p-1"> {editReview[0]?.userId}</h1>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className="font-bold p-1">Sevice Id : </h1>
                                    <h1 className="text-sm p-1"> {editReview[0]?.serviceId}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='p-2'>
                            <h1 className="font-bold">Rating </h1>
                            <input type="text" defaultValue={editReview[0]?.rating} placeholder="Type here" className="input input-bordered input-success w-full" readOnly/>
                        </div>
                        <div className='p-2'>
                            <h1 className="font-bold">Review Text </h1>
                            <textarea rows='10' id='re' defaultValue={editReview[0]?.reviewText} onChange={(e)=>setupreview(e.target.value)} className="textarea textarea-accent w-full" placeholder="Bio"></textarea>
                        </div>
                        <div className='text-right '>
                            <button className='btn' onClick={()=>updateReviews(editReview[0]?._id)}>Update Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;