import React from 'react';
import useTitle from '../CustomHooks/useTitle';

const Section1 = () => {
    useTitle('Home')
    return (
        <div className='pt-5'>
            <div>
                <div className='px-4 pt-6 rounded-lg'>
                    <div className='rounded-lg p-2 bg-gradient-to-r from-amber-50 via-amber-300 to-amber-50'>
                        <h1 className='text-4xl font-bold text-center'>Business Website Designing Price</h1>
                        <h1 className='text-center p-2'>My Designing price is most affordable, low cost web design Service in Bangladesh offering website designing with Unbeatable “Pricing”</h1>
                    </div>
                </div>
                <div className='p-4 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://www.zauca.com/wp-content/uploads/2017/10/xxxplanBasic.png,,Mic.6kXtttkuSu.webp,Mic.xk9DWYMhH4.webp.pagespeed.ic.aEvs7QQt4Y.webp" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title  font-bold">Basic Plan – ₹5800</h2>
                                <span className=''>
                                    – 1 Free Domain Name <br />
                                    – 10 Page (Dynamic Website) <br />
                                    – Business Email id (Webmail) <br />
                                    – Unlimited Images & Videos <br />
                                    – Unlimited (Bandwidth/ Space) <br />
                                    – SEO Ready Website <br />
                                    – 100% Responsive Website <br />
                                    – Live Chat Integration <br />
                                    – Payment Gateway Integration <br />
                                    – Social Media Integration <br />
                                    – 24/7 Support (Phone/Email/Chat) <br />
                                    – Annual Renewal Rs. 3000
                                </span>
                                <div className='pb-8'>
                                    <p className='italic text-slate-400'>Note: GST @ 18% Applicable on All Purchase</p>
                                </div>
                                <div className='flex flex-row justify-center'>
                                    <div className="card-actions absolute bottom-2">
                                        <button className="btn btn-primary hover:bg-white hover:text-black hover:outline-black animate-bounce">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://www.zauca.com/wp-content/uploads/2017/11/xxxxplanStandard.png,,,,Mic.HRmo08fhd9.webp,,Mic.-XT1ocgNFa.webp,Mic._a52zMdMFm.webp.pagespeed.ic.B1lS-MhB1a.webp" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">Classic Plan – ₹6900</h2>
                                <span className=''>
                                    – 1 Free Domain Name <br />
                                    – UL Pages* (Dynamic Website) <br />
                                    – Business Email id (Webmail) <br />
                                    – Unlimited Images & Videos <br /> 
                                    – Unlimited (Bandwidth/ Space) <br />
                                    – SEO (Express) Ready Website <br />
                                    – 100% Responsive Website <br />
                                    – Live Chat Integration <br />
                                    – Payment Gateway Integration <br />
                                    – Social Media Integration <br />
                                    – WhatsApp Integration <br />
                                    – SSL Certificate <br />
                                    – 24/7 Support (Phone/Email/Chat) <br />
                                    – Annual Renewal Rs. 4000 
                                </span>
                                <div className='pb-8'>
                                    <p className='italic text-slate-400'>Note: GST @ 18% Applicable on All Purchase</p>
                                </div>
                                <div className='flex flex-row justify-center'>
                                    <div className="card-actions absolute bottom-2 ">
                                        <button className="btn btn-primary hover:bg-white hover:text-black hover:outline-black animate-bounce">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://www.zauca.com/wp-content/uploads/2017/10/xxxxxplanPremium.png,,,,,,,,Mic.9bqDQ0_xbr.webp,,,,Mic.3YATC-CzGR.webp,,Mic.wg9pdr6yCK.webp,Mic.vh4T7GFYSE.webp.pagespeed.ic.IlhNYRlqbJ.webp" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">Premium Plan – ₹10300</h2>
                                <span className=''>
                                    – 1 Free Domain Name
                                    – UL Pages* (Dynamic Website) <br />
                                    – Unlimited Email id (Webmail) <br />
                                    – Android Application* <br />
                                    – Unlimited Images & Videos <br />
                                    – Unlimited (Bandwidth/ Space) <br />
                                    – SEO (Express) Ready Website <br />
                                    – 100% Responsive Website <br />
                                    – Live Chat Integration <br />
                                    – Payment Gateway Integration <br />
                                    – Social Media Integration <br />
                                    – WhatsApp Integration <br />
                                    – SSL Certificate <br />
                                    – cPanel* Access <br />
                                    – 24/7 Support (Phone/Email/Chat) <br />
                                    – Annual Renewal Rs. 5000 <br />
                                </span>
                                <div className='pb-8'>
                                    <p className='italic text-slate-400'>Note: GST @ 18% Applicable on All Purchase</p>
                                </div>
                                <div className='flex flex-row justify-center'>
                                    <div className="card-actions absolute bottom-2 ">
                                        <button className="btn btn-primary hover:bg-white hover:text-black hover:outline-black animate-bounce">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;