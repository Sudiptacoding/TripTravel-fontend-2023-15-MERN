import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

import { GiPlagueDoctorProfile } from "react-icons/gi";
import { GoPackageDependencies } from "react-icons/go";
import { FaUserInjured, FaWrench } from "react-icons/fa";

const AdminRoot = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <div className="bg-gray-50 dark:bg-slate-900 pt-[58px] md:pt-[90px] lg:pt-0">
                    <div className="sticky inset-x-0 top-0 z-20 px-4 bg-white border-y sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center py-4">

                            <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
                                <span className="sr-only">Toggle Navigation</span>
                                <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </button>

                            <ol className="flex items-center ms-3 whitespace-nowrap" aria-label="Breadcrumb">
                                <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                                    Application Layout
                                    <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </li>
                                <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
                                    Dashboard
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-6">
                            <Link to='/' className="flex-none text-xl font-semibold dark:text-white" aria-label="Brand">Trips Travel</Link>
                        </div>

                        <nav className="flex flex-col flex-wrap w-full p-6 hs-accordion-group" data-hs-accordion-always-open>
                            <ul className="space-y-1.5">

                                <li>
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        }
                                        to='/admin-dashboard/admin' >
                                        <GiPlagueDoctorProfile />
                                        My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/admin-dashboard/addpackage'
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        }
                                    >
                                        <GoPackageDependencies />
                                        Add Package
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        }
                                        to='/admin-dashboard/manageusers'

                                    >
                                        <FaUserInjured />
                                        Manage Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        }
                                        to='/admin-dashboard/manageservice'

                                    >
                                        <FaWrench className="text-blue-500" />
                                        Manage Service
                                    </NavLink>
                                </li>

                            </ul>
                        </nav>
                    </div>

                    <div className="w-full px-4 pt-10 sm:px-6 md:px-8 lg:ps-72">
                        <header className='lg:pt-[45px] pt-0'>
                            <Outlet></Outlet>
                        </header>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminRoot;