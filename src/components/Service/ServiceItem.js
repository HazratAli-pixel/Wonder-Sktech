import React from 'react';

const ServiceItem = () => {
    return (
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
    );
};

export default ServiceItem;