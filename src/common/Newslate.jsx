import React from 'react';

const Newslate = () => {
    return (
        <div className='py-32 dark:bg-gray-900'>
            <div className="container flex flex-col justify-between p-6 mx-auto md:w-2/3 xl:w-auto xl:items-stretch xl:flex-row">
                <div className="relative flex items-center justify-center h-auto xl:w-1/2 md:mb-14 xl:mb-0">
                    <img src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Envelope with a newsletter" role="img" className="w-full h-full xl:w-full lg:w-1/2 " />
                </div>
                <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
                    <h1 className="mt-4 mb-4 text-2xl font-bold leading-10 text-center text-gray-800 md:text-4xl dark:text-white xl:text-5xl xl:text-left md:mt-0">Subscribe</h1>
                    <p className="text-base leading-normal text-center text-gray-600 xl:text-left dark:text-white">Whether article spirits new her covered hastily sitting her. Money witty books nor son add.</p>
                    <div className="flex items-stretch mt-12">
                        <input className="w-4/5 p-5 text-base leading-none text-gray-800 bg-gray-100 border border-transparent rounded-lg rounded-r-none focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                        <button className="w-32 p-5 text-base font-medium leading-none text-white uppercase bg-indigo-700 rounded rounded-l-none hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslate;