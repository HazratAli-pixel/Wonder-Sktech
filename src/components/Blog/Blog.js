import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div className='bg-slate-200 rounded-3 m-0 p-2'>
                <h1 className='text-2xl text-center font-bold p-3 bg-violet-600 rounded-lg text-white'>Questions And Answer</h1>
                <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                    <div className='pl-2 pr-2 pt-2'>
                    <p className="bg-slate-200 p-4 rounded-lg font-extrabold text-slate-800 text-start" >what is cors?</p>
                    </div>
                    <div className='rounded-lg bg-teal-200 border-2 border-teal-400 m-2 p-2'>
                        <p className='text-start py-2'><strong>Answer: </strong></p>
                        <div className='flex justify-center'>
                            <img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png" alt="" />
                        </div>
                        <p className='text-start py-2'><strong className='italic'>Cross-Origin Resource Sharing </strong> (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. </p>
                    </div>
                </div>
                <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                    <div className='pl-2 pr-2 pt-2'>
                        <p className="bg-slate-200 p-4 rounded-lg font-extrabold text-slate-800 text-start" >Why are you using firebase? What other options do you have to implement authentication?</p>
                    </div>
                    <div className='rounded-lg bg-teal-200 border-2 border-teal-400 m-2 px-2'>
                        <p className='text-start py-2'><strong>Answer: </strong></p>
                        <div className='flex justify-center'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png" alt="" />
                        </div>
                        <p className='text-start py-2'><strong>1. </strong> Firebase-is-an-app-development-platform-that-helps-you-build-and-grow-apps-and-games-users-love.-backed-by-google-and-trusted-by-millions-of-businesses-around-the-world.</p>
                        <p className='text-start py-2'><strong>2. </strong> Okta, Auth0, Microsoft, Duo, IBM, RSA, OneLogin, SecureAuth & Rippling</p>
                                
                    </div>
                </div>
                <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                    <div className='pl-2 pr-2 pt-2'>
                        <p className="bg-slate-200 p-4 rounded-lg font-extrabold text-slate-800 text-start" >How does the private route work?</p>
                    </div>
                    <div className='rounded-lg bg-teal-200 border-2 border-teal-400 m-2 p-2'>
                        <p className='text-start py-2'><strong>Answer: </strong>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                    </div>
                </div>
                <div className='w-full mt-5 rounded-lg bg-slate-50 border-2 border-slate-400'>
                    <div className='pl-2 pr-2 pt-2'>
                        <p className="bg-slate-200 p-4 rounded-lg font-extrabold text-slate-800 text-start" > What is Node? How does Node work?</p>
                    </div>
                    <div className='rounded-lg bg-teal-200 border-2 border-teal-400 m-2 p-2'>
                        <p className='text-start py-2'><strong>Answer (Node): </strong>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        <div className='flex justify-center'>
                            <img src="https://miro.medium.com/max/1200/1*jLDq9IOW31Tu-ojeqe9bBw.png" alt="" />
                        </div>
                        <p className='text-start py-2'> <strong>Working of Node.js: </strong> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;