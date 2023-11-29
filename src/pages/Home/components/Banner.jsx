import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { HiMiniArrowUturnLeft, HiMiniArrowUturnRight } from "react-icons/hi2";

const Banner = () => {

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '600px'
    }

    const properties = {
        prevArrow: <button><HiMiniArrowUturnLeft className='text-2xl text-white' /></button>,
        nextArrow: <button><HiMiniArrowUturnRight className='text-2xl text-white' /></button>
    }


    const slideImages = [
        {
            url: 'https://images.pexels.com/photos/3776776/pexels-photo-3776776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            caption: 'Slide 1'
        },
        {
            url: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            caption: 'Slide 2'
        },
        {
            url: 'https://images.pexels.com/photos/176398/pexels-photo-176398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            caption: 'Slide 3'
        },
        {
            url: 'https://images.pexels.com/photos/8077406/pexels-photo-8077406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            caption: 'Slide 4'
        },
    ];
    return (

        <div className="slide-container">
            <Fade {...properties} autoplay={true}>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <div className='w-full h-screen bg-[#000000b6] flex items-center justify-center'>
                                <div>
                                    <div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')]">
                                        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

                                            <div class="flex justify-center">
                                                <a class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400">
                                                    Discover, Dream, Explore
                                                    <span class="flex items-center gap-x-1">
                                                        <span class="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500">Trips Travel</span>
                                                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                    </span>
                                                </a>
                                            </div>

                                            <div class="mt-5 lg:max-w-4xl 2xl:max-w-6xl text-center mx-auto">
                                                <h1 class="block font-bold text-white text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                                                    Your Gateway to Extraordinary Journeys
                                                </h1>
                                            </div>


                                            <div class="mt-5 lg:max-w-5xl 2xl:max-w-6xl text-center mx-auto">
                                                <p class="text-lg text-white dark:text-gray-400">Unlock the door to wanderlust and start your urban odyssey here. The capitals are calling, and we're here to guide you every step of the way. Welcome to Trips Travel, where the journey is as extraordinary as the destination.</p>
                                            </div>


                                            <div class="mt-8 gap-3 flex justify-center">
                                                <a target='_blank' class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="https://github.com/Sudiptacoding">
                                                    <svg class="flex-shrink-0 w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                                    </svg>
                                                    Continue with Github
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default Banner;