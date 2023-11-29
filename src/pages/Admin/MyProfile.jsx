import React from 'react';
import { UserProvider } from '../../context/AuthContext';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';


const MyProfile = () => {
    const { user } = useContext(UserProvider)

    return (
        <div className='h-screen'>
            <Helmet>
                <title>TripsTravel | Admin</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div
                className="max-w-2xl mx-4 mt-16 text-gray-900 bg-white rounded-lg shadow-xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
                <div className="h-32 overflow-hidden rounded-t-lg">
                    <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                </div>
                <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
                    <img className="object-cover object-center h-32" src={user?.photoURL} alt='Woman looking front' />
                </div>
                <div className="mt-2 text-center">
                    <h2 className="font-semibold">{user?.displayName}</h2>
                    <p className="text-gray-500">{user?.email}</p>
                </div>
                <ul className="flex items-center justify-around py-4 mt-2 text-gray-700">
                    <li className="flex flex-col items-center justify-around">
                        <svg className="w-4 text-blue-900 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <div>2k</div>
                    </li>
                    <li className="flex flex-col items-center justify-between">
                        <svg className="w-4 text-blue-900 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                        </svg>
                        <div>10k</div>
                    </li>
                    <li className="flex flex-col items-center justify-around">
                        <svg className="w-4 text-blue-900 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                        </svg>
                        <div>15</div>
                    </li>
                </ul>
                <div className="p-4 mx-8 mt-2 border-t">
                    <button data-hs-overlay="#hs-bg-gray-on-hover-cards" className="block w-1/2 px-6 py-2 mx-auto font-semibold text-white bg-gray-900 rounded-full hover:shadow-lg">View Details</button>
                </div>
            </div>
            <div id="hs-bg-gray-on-hover-cards" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div className="m-3 mt-0 transition-all ease-out opacity-0 hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:max-w-lg sm:w-full sm:mx-auto">
                    <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
                        <div className="relative overflow-hidden min-h-[8rem] bg-gray-900 text-center rounded-t-xl">
                            <div className="absolute top-2 right-2">
                                <button type="button" className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-gray-500 transition-all rounded-md hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-bg-gray-on-hover-cards">
                                    <span className="sr-only">Close</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                            <figure className="absolute inset-x-0 bottom-0">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                                    <path fill="currentColor" className="fill-white dark:fill-gray-800" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                                </svg>
                            </figure>
                        </div>
                        <div className="relative z-10 -mt-12">
                            <span className="mx-auto flex justify-center items-center w-[62px] h-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                <img className="rounded-full" src={user?.photoURL} alt="" />
                            </span>
                        </div>
                        <div className="p-4 overflow-y-auto sm:p-7">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    {user?.email}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {user?.displayName}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5 sm:mt-10 sm:grid-cols-3">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase">Email Status:</span>
                                    <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">Admin</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase">Create Date </span>
                                    <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">{user?.metadata?.creationTime}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase">Last signin:</span>
                                    <div className="flex items-center gap-x-2">
                                        <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">{user?.metadata?.lastSignInTime}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-10">
                                <h4 className="text-xs font-semibold text-gray-800 uppercase dark:text-gray-200">Summary</h4>
                                <ul className="flex flex-col mt-3">
                                    <li className="inline-flex items-center px-4 py-3 -mt-px text-sm text-gray-800 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                                        <div className="flex items-center justify-between w-full">
                                            <span>lastLoginAt</span>
                                            <span>{user?.reloadUserInfo?.lastLoginAt}</span>
                                        </div>
                                    </li>
                                    <li className="inline-flex items-center px-4 py-3 -mt-px text-sm text-gray-800 border gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                                        <div className="flex items-center justify-between w-full">
                                            <span>lastRefreshAt</span>
                                            <span>{user?.reloadUserInfo?.lastRefreshAt}</span>
                                        </div>
                                    </li>
                                    <li className="inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 border gap-x-2 bg-gray-50 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200">
                                        <div className="flex items-center justify-between w-full">
                                            <span>validSince</span>
                                            <span>{user?.reloadUserInfo?.validSince}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;