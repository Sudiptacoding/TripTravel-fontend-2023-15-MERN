import React from 'react';
import useMyBookings from '../../hooks/useMyBookings';
import Loader from '../../common/Loader';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';
import Confetti from 'react-confetti'

const MyBookings = () => {
    const { isPending, error, allbookings, refetch } = useMyBookings();
    const axiosData = useAxios()
    const handelCancel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to cancel this bookings!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosData.delete(`/deletbooking/${id}`)
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Bookings successfully cancel.",
                            icon: "success"
                        });
                        refetch()
                    })
            }
        });
    }
    const handelPay = (item) => {
        Swal.fire({
            title: "Good job!",
            text: "Your Payment Successfully Send",
            icon: "success"
        });
    }


    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <div className='h-screen'>
                {
                    allbookings?.length > 0 ?
                        <div className="py-10 lg:py-14 mx-auto">
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
                                                        <th scope="col" className="px-6 py-3 text-start">
                                                            <div className="flex items-center gap-x-2">
                                                                <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                                                                    Services
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-center">
                                                            <div className="flex items-center justify-center gap-x-2">
                                                                <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                                                                    Guide
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
                                                        <th scope="col" className="px-6 py-3 text-start">
                                                            <div className="flex items-center justify-center gap-x-2">
                                                                <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">

                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-start">
                                                            <div className="flex items-center justify-center gap-x-2">
                                                                <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">
                                                                    Action
                                                                </span>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="px-6 py-3 text-start">
                                                            <div className="flex items-center justify-center gap-x-2">
                                                                <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-200">

                                                                </span>
                                                            </div>
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    {
                                                        allbookings?.map((item, i) => {
                                                            return <tr key={i} className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="block p-6">
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
                                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item?.name}</span>
                                                                        </div>

                                                                    </a>
                                                                </td>
                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="block p-6" >
                                                                        <div className="py-3 text-center">
                                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item?.time}</span>
                                                                        </div>

                                                                    </a>
                                                                </td>
                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="block p-6" >
                                                                        <div className=" py-3 text-center">
                                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{item?.price} TK</span>
                                                                        </div>

                                                                    </a>
                                                                </td>
                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="block p-6" >
                                                                        <div className="text-center py-3">
                                                                            {
                                                                                item?.status === 'Accepted' && <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                                                    <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                                    </svg>
                                                                                    {item?.status}
                                                                                </span>
                                                                            }
                                                                            {
                                                                                item?.status === 'Reject' && <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
                                                                                    <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                                                                    </svg>
                                                                                    {item?.status}
                                                                                </span>
                                                                            }
                                                                            {
                                                                                item?.status === 'In Review' && <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
                                                                                    <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                                                    </svg>
                                                                                    {item?.status}
                                                                                </span>
                                                                            }
                                                                        </div>
                                                                    </a>
                                                                </td>
                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="flex justify-center p-6" >
                                                                        {
                                                                            item?.status === 'Accepted' ? <button onClick={() => handelPay(item)} type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                                Pay
                                                                            </button> : <button disabled type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                                Pay
                                                                            </button>
                                                                        }
                                                                    </a>
                                                                </td>
                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="flex justify-center p-6" >
                                                                        {
                                                                            item?.status === 'In Review' ? <button onClick={() => handelCancel(item?._id)} type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                                Cancel
                                                                            </button> : <button disabled type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                                Cancel
                                                                            </button>
                                                                        }


                                                                    </a>
                                                                </td>
                                                                <td className="w-px h-px align-top whitespace-nowrap">
                                                                    <a className="flex justify-center p-6" >
                                                                        {
                                                                            allbookings?.length > 3 ? <button data-hs-overlay="#hs-task-created-alert" type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                                Apply
                                                                            </button> : <button disabled type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                                Apply
                                                                            </button>
                                                                        }


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
                        </div> : <div className='flex items-center justify-center w-full min-h-[70vh]'><h1 className='text-2xl font-bold dark:text-white '>Your Painding work is empty</h1></div>
                }
            </div>




            <div id="hs-task-created-alert" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div class="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
                        <div class="absolute top-2 end-2">
                            <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-task-created-alert">
                                <span class="sr-only">Close</span>
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>

                        <div class="p-4 sm:p-10 text-center overflow-y-auto">

                            <span class="mb-4 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-4 border-green-50 bg-green-100 text-green-500 dark:bg-green-700 dark:border-green-600 dark:text-green-100">
                                <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                                </svg>
                            </span>


                            <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                                Task successfully fill up!
                            </h3>
                            <p class="text-gray-500">
                                Congratulations you have got 20%  discount
                            </p>
                            <Confetti />

                            <div class="mt-6 flex justify-center gap-x-4">
                                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-task-created-alert">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
};

export default MyBookings;