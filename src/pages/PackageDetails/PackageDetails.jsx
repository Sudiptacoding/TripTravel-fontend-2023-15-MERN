import React from 'react';
import MeetTourGuide from '../Home/components/TabComponents/MeetTourGuide';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import useTourGuide from '../../hooks/useTourGuide';
import Loader from '../../common/Loader';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useIsToureGuide from '../../hooks/useIsToureGuide';
import useIsAdmin from '../../hooks/useIsAdmin';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { UserProvider } from '../../context/AuthContext';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from 'react-helmet';

const PackageDetails = () => {
    const { user } = useContext(UserProvider)
    const buyUserEmail = user?.email || null
    const axiosData = useAxios()
    const { isToureGide } = useIsToureGuide()
    const { isAdmin } = useIsAdmin()
    const { allTourGuide } = useTourGuide()
    const [startDate, setStartDate] = useState(new Date());
    const guideselectDate = startDate.toDateString()

    const { id } = useParams()

    const [select, setSelect] = useState('')
    const navigate = useNavigate()

    const { isPending, error, data } = useQuery({
        queryKey: ['servicedetails'],
        queryFn: () =>
            axiosData.get(`/servicedetails/${id}`)
                .then(res => {
                    return (res.data)
                })
    })
    const handelBuyCard = () => {
        const { serviceName, serviceArea, serviceImage, category, price, time, } = data;
        if (!select) {
            return toast.error("Please Select Your Tour Guide")
        }
        const { email, name, photo } = select
        const status = 'In Review'
        const saveData = {
            serviceName, serviceArea, serviceImage, category, price, time, email, name, photo, buyUserEmail, status, guideselectDate
        }
        axiosData.post('/servicesbooking', saveData)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "You Booking Added Successfully",
                    icon: "success"
                });
                navigate('/')
            })
    }


    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message
    return (
        <>
            <section className="overflow-hidden text-gray-700 bg-white body-font dark:bg-gray-900">
                <Helmet>
                    <title>TripsTravel | Details</title>
                    <meta name="description" content="Helmet application" />
                </Helmet>

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap mx-auto lg:w-4/5">
                        <img alt="ecommerce" className="object-cover object-center w-full border border-gray-200 rounded lg:w-1/2" src={data?.serviceImage} />
                        <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                            <h2 className="text-sm tracking-widest text-gray-500 title-font dark:text-white">{data?.category} ({data?.time})</h2>
                            <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font dark:text-white">{data?.serviceArea}</h1>

                            <p className="leading-relaxed dark:text-white">{data?.textarea}</p>
                            <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-200">
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


                            <div className="flex items-center gap-10 pb-6 space-y-2">
                                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                    Enter Your Date
                                </label>
                                <ReactDatePicker className="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>



                            <div className="pb-6 space-y-2">
                                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                    Tour Guide
                                </label>
                                <select
                                    name="category"
                                    onChange={(e) => {
                                        const selectedGuide = allTourGuide.find(
                                            (guide) => guide.name === e.target.value
                                        );
                                        setSelect(selectedGuide);
                                    }}
                                    className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-9 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                >
                                    <option selected>Select Your Tour Guide</option>
                                    {allTourGuide?.map((item, i) => (
                                        <option key={i}>{item.name}</option>
                                    ))}
                                </select>
                            </div>


                            <div class="flex items-center justify-between ">
                                <span class="title-font font-medium text-2xl text-gray-900 dark:text-white">BDT {data?.price} TK</span>

                                {
                                    !isToureGide && !isAdmin ? <span>
                                        <button data-hs-overlay="#hs-task-created-alert" type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            Add to cart
                                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 11 4-7" /><path d="m19 11-4-7" /><path d="M2 11h20" /><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" /><path d="m9 11 1 9" /><path d="M4.5 15.5h15" /><path d="m15 11-1 9" /></svg>
                                        </button>
                                        <Link to='/user-dashboard/mybookings' type="button" class="py-3 px-4 ml-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            My Bookings
                                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </Link>
                                    </span> : <span>
                                        <button disabled onClick={handelBuyCard} type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            Add to cart
                                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 11 4-7" /><path d="m19 11-4-7" /><path d="M2 11h20" /><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" /><path d="m9 11 1 9" /><path d="M4.5 15.5h15" /><path d="m15 11-1 9" /></svg>
                                        </button>
                                        <Link to='/' type="button" class="py-3 px-4 ml-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            Go Home
                                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </Link>
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOdal */}

                <div>
                    <div id="hs-task-created-alert" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto">
                        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                            <div class="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
                                <div class="absolute top-2 end-2">
                                    <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-task-created-alert">
                                        <span class="sr-only">Close</span>
                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </button>
                                </div>

                                <div class="p-4 sm:p-10 text-center overflow-y-auto">

                                    <span class="mb-4 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-4 border-green-50 bg-green-100 text-green-500 dark:bg-green-700 dark:border-green-600 dark:text-green-100">
                                        <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                                        </svg>
                                    </span>


                                    <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                                        Are you Confirm your Booking
                                    </h3>
                                    <p class="text-gray-500">
                                        Please click confirm your booking button or go to home.
                                    </p>

                                    <div class="mt-6 flex justify-center gap-x-4">
                                        <button onClick={handelBuyCard} type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-task-created-alert">
                                            Confirm your Booking
                                        </button>
                                        <Link to='/' type="button" class="py-3 px-4 ml-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                            Go Home
                                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <MeetTourGuide></MeetTourGuide>
            </section>

        </>
    );
};

export default PackageDetails;