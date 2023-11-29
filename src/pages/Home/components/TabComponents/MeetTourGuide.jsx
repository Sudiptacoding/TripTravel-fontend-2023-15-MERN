import React, { useState } from 'react';

import NoDataHere from '../../../../common/NoDataHere';
import useTourGuide from '../../../../hooks/useTourGuide';
import Loader from '../../../../common/Loader';
import useAxios from '../../../../hooks/useAxios';
import { IoMdCall } from "react-icons/io";



const MeetTourGuide = () => {
    const { isPending, error, allTourGuide, refetch } = useTourGuide()
    const axiosData = useAxios()
    const [data, setData] = useState([])


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
                            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Meet the crew</h2>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">Creative people</p>
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
                                                
                                            }
                                            <div onClick={() => handelShowAll(item?.email)} className="mt-2 inline-flex cursor-pointer items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                                                More Details
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                            </div>
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
                                </div>
                                <div className="max-w-2xl mx-auto">

                                    <div className="hs-accordion-group">

                                        {
                                            data?.map((item, i) => {
                                                return <div key={i} className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                                    <button className="inline-flex items-center justify-between w-full pb-3 font-semibold text-gray-800 transition rounded-lg hs-accordion-toggle group gap-x-3 md:text-lg text-start hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                                        {item?.category} || provider({item?.userName})
                                                        <svg className="flex-shrink-0 block w-5 h-5 text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                        <svg className="flex-shrink-0 hidden w-5 h-5 text-gray-600 hs-accordion-active:block group-hover:text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
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