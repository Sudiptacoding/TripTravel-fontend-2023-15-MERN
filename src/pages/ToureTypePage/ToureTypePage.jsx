import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useEffect } from 'react';
import { useState } from 'react';
import { SlHeart } from 'react-icons/sl';
import useIsAdmin from '../../hooks/useIsAdmin';
import useIsToureGuide from '../../hooks/useIsToureGuide';
import NoDataHere from '../../common/NoDataHere';

const ToureTypePage = () => {
    const { type } = useParams()
    const axiosData = useAxios()
    const { isAdmin } = useIsAdmin()
    const { isToureGide } = useIsToureGuide()
    const [allservices, setAllServices] = useState([])
    useEffect(() => {
        axiosData.get(`/touretype?type=${type}`)
            .then(res => {
                setAllServices(res.data)
            })
    }, [])
    console.log(type)
    return (
        <div>
            <div className='pt-10'>
                {
                    allservices?.length > 0 ?
                        <div>



                            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {
                                        allservices?.map((item, i) => {
                                            return <div key={i} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                                <div className="relative overflow-hidden w-full h-[230px] rounded-lg">
                                                    <div className="relative group">
                                                        <img src={item?.serviceImage} />
                                                        <div className="absolute h-[230px] inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                                                            {
                                                                !isAdmin && !isToureGide && <div onClick={() => handelSaveServices(item)} className='cursor-pointer'>
                                                                    <SlHeart className='text-2xl text-white' />
                                                                </div>
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-4 md:p-6">
                                                    <span className="block mb-1 text-xs font-semibold text-blue-600 uppercase dark:text-blue-500">
                                                        {item?.serviceName}
                                                    </span>
                                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                                        <span>{item?.category} </span>
                                                        <span className='px-3 ml-10 text-sm text-white bg-blue-500 rounded-full'>BDT {item?.price} TK</span>
                                                    </h3>
                                                    <p className="mt-3 text-gray-500">
                                                        {item?.textarea?.slice(0, 90)}..
                                                    </p>
                                                    <Link to={`/details/${item?._id}`} className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                                                        View Package
                                                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                    </Link>
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
        </div>
    );
};

export default ToureTypePage;