import React from 'react';
import useWishlist from '../../hooks/useWishlist';
import Loader from '../../common/Loader';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyWishlist = () => {
    const { isPending, error, allwishlist, refetch } = useWishlist()
    const axiosData = useAxios()
    const [data, setData] = useState({})

    const handelDeleteList = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Want to delete this item",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosData.delete(`/loveservices/${id}`)
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item deleted successfully.",
                            icon: "success"
                        });
                        refetch();
                    })

            }
        });
    }

    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <div className='h-screen'>
                {
                    allwishlist?.length > 0 ?
                        <div className="">
                            <div className="flex flex-col">
                                <div className="-m-1.5 overflow-x-auto">
                                    <div className="p-1.5 min-w-full inline-block align-middle">
                                        <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
                                            <div className="grid gap-3 px-6 py-4 border-b border-gray-200 md:flex md:justify-between md:items-center dark:border-gray-700">
                                                <div className="sm:col-span-1">
                                                    <label for="hs-as-table-product-review-search" className="sr-only">Search</label>
                                                    <div className="relative">
                                                        <input type="text" id="hs-as-table-product-review-search" name="hs-as-table-product-review-search" className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg ps-11 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search" />
                                                        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-4">
                                                            <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead className="bg-gray-50 dark:bg-slate-800">
                                                    <tr className=''>
                                                        <th scope="col" className="px-16 py-3 text-start">
                                                            <div className="flex items-center justify-center gap-x-2">
                                                                <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                                                                    Tours
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-center">
                                                            <div className="flex items-center justify-center gap-x-2">
                                                                <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                                                                    Places
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-start">
                                                            <div className="flex items-center justify-center gap-x-2">
                                                                <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                                                                    Date
                                                                </span>
                                                            </div>
                                                        </th>

                                                        <th scope="col" className="px-6 py-3 text-start">
                                                            <div className="flex items-center justify-center gap-x-2">
                                                                <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                                                                    Price
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-start">
                                                            <div className="flex items-center justify-center gap-x-2">
                                                                <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                                                                    Status
                                                                </span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    {
                                                        allwishlist?.map((item, i) => {
                                                            return <tr key={i} className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="block p-6 text-center">
                                                                        <div className="flex items-center gap-x-4">
                                                                            <img className="flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-lg" src={item?.serviceImage} alt="Image Description" />
                                                                            <div>
                                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item?.category}</span>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </td>

                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="block p-6" >
                                                                        <div className="px-6 py-3 text-center">
                                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item?.serviceArea}</span>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="block p-6" >
                                                                        <div className="px-6 py-3 text-center">
                                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item?.time}</span>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="block p-6" >
                                                                        <div className="px-6 py-3 text-center">
                                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item?.price} Tk</span>
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="block p-6" >
                                                                        <button onClick={() => setData(item)} data-hs-overlay="#hs-sign-out-alert" type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-teal-900 dark:text-teal-500 dark:hover:text-teal-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                            Visit Details
                                                                        </button>
                                                                        <button onClick={() => handelDeleteList(item._id)} type="button" class="py-3 ml-4 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                            Delete
                                                                        </button>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : <div className='flex items-center justify-center w-full min-h-[70vh]'><h1 className='text-2xl font-bold dark:text-white '>Your Wishlist Is Empty</h1></div>
                }
            </div>

            <div id="hs-sign-out-alert" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-1/2 sm:w-full m-3 sm:mx-auto">
                    <div class="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
                        <div class="absolute top-2 end-2">
                            <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-sign-out-alert">
                                <span class="sr-only">Close</span>
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>

                        <div class="p-4 sm:p-10 text-center overflow-y-auto">




                            <section className="text-gray-700 body-font overflow-hidden bg-white dark:bg-gray-900">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={data?.serviceImage} />
                                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                            <h2 className="text-sm title-font text-gray-500 tracking-widest dark:text-white">{data?.category} ({data?.time})</h2>
                                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 dark:text-white">{data?.serviceArea}</h1>

                                            <p className="leading-relaxed dark:text-white">{data?.textarea}</p>
                                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                                <div class="hs-accordion-group">
                                                    <div class="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent" id="hs-active-bordered-heading-one">
                                                        <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-active-bordered-collapse-one">
                                                            Day 1: Explore the City
                                                            <svg class="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                            <svg class="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                                        </button>
                                                        <div id="hs-basic-active-bordered-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-one">
                                                            <div class="pb-4 px-5">
                                                                <p class="text-gray-800 dark:text-gray-200">
                                                                    <em>Start the day with a visit to iconic landmarks.</em>  Include famous monuments, historical sites, or architectural wonders. Introduce tourists to the local cuisine. Recommend popular restaurants or street food stalls.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="hs-accordion hs-accordion-active:border-gray-200 active bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent" id="hs-active-bordered-heading-two">
                                                        <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-active-bordered-collapse-two">
                                                            Day 2: Nature and Adventure
                                                            <svg class="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                            <svg class="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                                        </button>
                                                        <div id="hs-basic-active-bordered-collapse-two" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-two">
                                                            <div class="pb-4 px-5">
                                                                <p class="text-gray-800 dark:text-gray-200">
                                                                    <em>Offer outdoor activities like hiking, biking, or zip-lining.</em> Visit a nearby park or nature reserve for a natural experience. Provide picnic options in a scenic location.Suggest local markets for fresh produce and snacks.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent" id="hs-active-bordered-heading-three">
                                                        <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-active-bordered-collapse-three">
                                                            Day 3: Relaxation and Leisure
                                                            <svg class="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                            <svg class="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                                        </button>
                                                        <div id="hs-basic-active-bordered-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-three">
                                                            <div class="pb-4 px-5">
                                                                <p class="text-gray-800 dark:text-gray-200">
                                                                    <em>Offer a spa or wellness day for relaxation.</em> Provide options for massages, hot springs, or yoga sessions. Guide tourists to popular shopping districts.Include local markets for souvenirs and unique finds.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between ">
                                                <span class="title-font font-medium text-2xl text-gray-900 dark:text-white">BDT {data?.price} TK</span>

                                                <span>

                                                    <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-sign-out-alert">
                                                        <span class="sr-only">Close</span>
                                                        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                            Close
                                                        </button>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

};

export default MyWishlist;