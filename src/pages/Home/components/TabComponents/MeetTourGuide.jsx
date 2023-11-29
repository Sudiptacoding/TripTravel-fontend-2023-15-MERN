import React, { useContext, useState } from 'react';

import NoDataHere from '../../../../common/NoDataHere';
import useTourGuide from '../../../../hooks/useTourGuide';
import Loader from '../../../../common/Loader';
import useAxios from '../../../../hooks/useAxios';
import { IoMdCall } from "react-icons/io";
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UserProvider } from '../../../../context/AuthContext';

const MeetTourGuide = () => {
    const { isPending, error, allTourGuide, refetch } = useTourGuide()
    const { user } = useContext(UserProvider)
    const axiosData = useAxios()
    const [data, setData] = useState([])
    const [rating, setRating] = useState(0)

    const handelComment = (e) => {
        e.preventDefault()
        const comment = e.target.comment.value;
        const guide = data?.[0]?.userEmail
        const name = user?.displayName || null
        const sendData = {
            comment, guide, rating, name
        }
        axiosData.post('/userreview', sendData)
            .then(res => {
                toast.success('Successfully toasted!')
                e.target.reset();
            })
    }

    const handelShowAll = (email) => {
        axiosData.get(`/allguideData?email=${email}`)
            .then(res => {
                setData(res.data)
                document.getElementById('my_modal_3').showModal()
            })
    }

    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            {
                allTourGuide?.length > 0 ?
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
                            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Meet Our Tour Guides</h2>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">We are always ready for provide a services</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-32">
                            {
                                allTourGuide?.map((item, i) => {
                                    return <div key={i} className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                                        <img className="w-20 h-20 rounded-lg" src={item?.photo} alt="Image Description" />
                                        <div className="sm:flex sm:flex-col sm:h-full">
                                            <div>
                                                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                                    {item?.name}
                                                </h3>
                                                <p className="mt-1 text-xs text-gray-500 uppercase">
                                                    {item?.email}
                                                </p>
                                            </div>
                                            {
                                                user?.email && <div onClick={() => handelShowAll(item?.email)} className="mt-2 inline-flex cursor-pointer items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                                                    More Details
                                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    : <NoDataHere></NoDataHere>
            }

            <dialog id="my_modal_3" className="modal ">
                <div className="w-11/12 max-w-5xl modal-box dark:bg-gray-900">
                    <form method="dialog">
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2 dark:btn-primary">✕</button>
                    </form>
                    {
                        data?.length > 0 ?
                            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                <div className='flex items-center justify-center'>
                                    <img className='w-16 h-16 rounded-full' src={data?.[0]?.userPhoto} alt="" />
                                </div>
                                <div className="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
                                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Guide Name , {data?.[0]?.userName}</h2>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Education:({data?.[0]?.education}) & Skills:({data?.[0]?.skills})</p>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400"> <div className='flex items-center justify-center gap-2'><IoMdCall /> {data?.[0]?.contact}</div></p>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400"> <button data-hs-overlay="#hs-cookies" className="btn btn-xs">Please cradit {data?.[0]?.userName}</button></p>
                                </div>
                                <div className="max-w-2xl mx-auto">
                                    <div className="hs-accordion-group">
                                        {
                                            data?.map((item, i) => {
                                                return <div key={i} className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                    <button className="inline-flex items-center justify-between w-full pb-3 font-semibold text-gray-800 transition rounded-lg hs-accordion-toggle group gap-x-3 md:text-lg text-start hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                                        {item?.category} || provider({item?.userName})
                                                        <svg className="flex-shrink-0 block w-5 h-5 text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                        <svg className="flex-shrink-0 hidden w-5 h-5 text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                                    </button>
                                                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                        <p className="text-gray-800 dark:text-gray-200">
                                                            {item?.time} <br />
                                                            {item?.textarea} <br />
                                                        </p>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div id="hs-cookies" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[2000] overflow-x-hidden overflow-y-auto">
                                        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                                            <form onSubmit={handelComment} class="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
                                                <div class="absolute top-2 end-2">
                                                    <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-cookies">
                                                        <span class="sr-only">Close</span>
                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                    </button>
                                                </div>
                                                <div class="p-4 sm:p-14 text-center overflow-y-auto">
                                                    <StarRatings
                                                        rating={rating}
                                                        starRatedColor="blue"
                                                        changeRating={setRating}
                                                        numberOfStars={5}
                                                        name='rating'
                                                    />
                                                    <h3 class="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200 pt-3">
                                                        Please Comment!
                                                    </h3>
                                                    <p class="text-gray-500">
                                                        <textarea name='comment' class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" rows="3" placeholder="Please Inter Your Comment"></textarea>
                                                    </p>
                                                </div>
                                                <div class="flex items-center">
                                                    <Link to='/' type="button" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-es-xl border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-cookies">
                                                        Go Home
                                                    </Link>
                                                    <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-ee-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-cookies">
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : <NoDataHere></NoDataHere>
                    }
                </div>
            </dialog>
        </div>
    );
};

export default MeetTourGuide;