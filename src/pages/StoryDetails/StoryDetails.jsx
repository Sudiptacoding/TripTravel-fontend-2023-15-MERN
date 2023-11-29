import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FacebookShareButton, FacebookShareCount } from 'react-share';

const StoryDetails = () => {
    const { id } = useParams();
    const axiosData = useAxios()
    const [item, setItem] = useState({})
    useEffect(() => {
        axiosData.get(`/story/${id}`)
            .then(res => {
                setItem(res.data)
            })
    }, [])
    const shareUrl = 'http://github.com';
    return (
        <div className='flex items-center justify-center w-full min-h-screen pt-32 dark:bg-gray-900'>
            <div class="relative w-full p-5 cursor-pointer">

                <blockquote class="text-center lg:mx-auto lg:w-3/5">
                    <div class="mx-auto text-lg italic font-bold  h-auto  text-gray-800 dark:text-gray-200">
                        {item?.time}
                    </div>

                    <div class="mt-6 lg:mt-10">
                        <p class="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
                            <svg class="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z" fill="currentColor" />
                            </svg>
                            <span class="relative z-10 italic text-gray-800 dark:text-gray-200">{item?.story}.</span>
                        </p>
                    </div>

                    <footer class="mt-6">
                        <div class="p-4 rounded-b-xl md:px-7 ">
                            <div class="flex items-center justify-center">
                                <div class="f">
                                    <img class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]" src={item?.userPhoto} alt="Image Description" />
                                </div>

                                <div class=" ms-3">
                                    <p class="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                                        {item?.userName}
                                    </p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">
                                        {item?.userEmail}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </blockquote>

                <div className='flex items-center justify-center gap-5'>

                    <div className="Demo__some-network">
                        <FacebookShareButton url={shareUrl} className="Demo__some-network__share-button">
                            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Share on Facebook
                                <FaFacebook />
                            </button>
                        </FacebookShareButton>

                        <div>
                            <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                                {count => count}
                            </FacebookShareCount>
                        </div>
                    </div>
                    <Link to='/'>
                        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Go To Home
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </button>
                    </Link>

                </div>

            </div>



        </div>
    );
};

export default StoryDetails;