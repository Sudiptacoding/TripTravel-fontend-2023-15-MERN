import React from 'react';
import useAllServices from '../../hooks/useAllServices';
import Loader from '../../common/Loader';
import NoDataHere from '../../common/NoDataHere';
import { useState } from 'react';
import useIsAdmin from '../../hooks/useIsAdmin';
import useIsToureGuide from '../../hooks/useIsToureGuide';
import { Link } from 'react-router-dom';
import { SlHeart } from 'react-icons/sl';

const AllPackage = () => {
    const { isPending, error, allservices } = useAllServices();
    const { isAdmin } = useIsAdmin()
    const { isToureGide } = useIsToureGuide()
    const [search, setSearch] = useState('');
    if (isPending) return <Loader></Loader>
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='pt-10'>
            {
                allservices?.length > 0 ?
                    <div>
                        <div className="relative overflow-hidden">
                            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold text-gray-800 sm:text-6xl dark:text-gray-200">
                                        All packages
                                    </h1>
                                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                                        Please select your favourite please where you want to go.
                                    </p>
                                    <div className="relative max-w-xl mx-auto mt-7 sm:mt-12">
                                        <form>
                                            <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                                                <div className="flex-[1_0_0%]">
                                                    <label for="hs-search-article-1" className="block text-sm font-medium text-gray-700 dark:text-white"><span className="sr-only">Search article</span></label>
                                                    <input onChange={(e) => setSearch(e.target.value)} type="text" name="hs-search-article-1" id="hs-search-article-1" className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search Tour Type" />
                                                </div>
                                                <div className="flex-[0_0_auto]">
                                                    <a className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="absolute top-0 hidden translate-x-20 -translate-y-12 md:block end-0">
                                            <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                                                <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                                                <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <div className="absolute bottom-0 hidden -translate-x-32 translate-y-10 md:block start-0">
                                            <svg className="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {
                                    allservices?.filter((user) => {
                                        return search.toLowerCase() === '' ? user : user.category.toLowerCase().includes(search)
                                    }).map((item, i) => {
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
    );
};

export default AllPackage;