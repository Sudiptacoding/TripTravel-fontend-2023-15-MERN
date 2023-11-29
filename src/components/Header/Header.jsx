import DarkMood from '../../common/DarkMood';
import { Link, NavLink } from 'react-router-dom';
import SearchData from '../../common/SearchData';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import useIsAdmin from '../../hooks/useIsAdmin';
import useIsToureGuide from '../../hooks/useIsToureGuide';

const Header = () => {
    const { logOut, user, userPhoto } = useAuth();
    const { isAdmin } = useIsAdmin();
    const { isToureGide } = useIsToureGuide();

    const handelLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log out Successfully !')
            }).catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <header className="fixed z-50 flex flex-wrap w-full py-3 text-sm bg-[#111111ad] backdrop-blur-md sm:justify-start sm:flex-nowrap sm:py-0 dark:bg-gray-800 dark:border-gray-700">
                <nav className="relative w-full px-4 mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <Link to='/' className="flex-none text-xl font-semibold text-white dark:text-white" aria-label="Brand">Trips Travel</Link>
                        <div className="sm:hidden">
                            <button type="button" className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                <svg className="w-4 h-4 hs-collapse-open:hidden" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <svg className="hidden w-4 h-4 hs-collapse-open:block" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="navbar-collapse-with-animation" className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block">
                        <div className="flex flex-col mt-5 gap-y-4 gap-x-0 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-[26.75rem]">
                            <NavLink to='/'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium text-orange-500 sm:py-6 dark:text-blue-500" : "font-medium text-white hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                                }
                            >Home</NavLink>

                            <NavLink to='/community'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium text-orange-500 sm:py-6 dark:text-blue-500" : "font-medium text-white hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                                }
                            >Community</NavLink>

                            <NavLink to='/blog'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium text-orange-500 sm:py-6 dark:text-blue-500" : "font-medium text-white hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                                }
                            >Blogs</NavLink>

                            <NavLink to='/about'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium text-orange-500 sm:py-6 dark:text-blue-500" : "font-medium text-white hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                                }
                            >About Us</NavLink>

                            <NavLink to='/contract'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium text-orange-500 sm:py-6 dark:text-blue-500" : "font-medium text-white hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                                }
                            >Contact Us</NavLink>

                            {/* End part */}

                            <div className="flex items-center justify-center cursor-pointer gap-x-5 sm:ml-auto">
                                <div data-hs-overlay="#hs-overlay-top" className="flex items-center font-medium text-gray-500 gap-x-2 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>

                                <div className="flex items-center font-medium text-gray-500 cursor-pointer gap-x-2 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500" >
                                    <DarkMood ></DarkMood>
                                </div>

                                {
                                    user ? <div className="flex items-center font-medium text-gray-500 gap-x-2 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500" >
                                        <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                                            <button id="hs-dropdown-with-header" type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
                                                <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src={user?.photoURL || userPhoto} alt="Image Description" />
                                            </button>

                                            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-with-header">
                                                <div className="px-5 py-3 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                                                    <p className="pt-3 text-sm font-normal text-gray-800 dark:text-gray-300">{user?.displayName}</p>
                                                    <p className="text-sm font-medium text-gray-800 dark:text-gray-300">{user?.email}</p>
                                                </div>
                                                <div className="py-2 mt-2 first:pt-0 last:pb-0">

                                                    <div className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
                                                        <svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                                            <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                                            <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                                        </svg>
                                                        {
                                                            isAdmin && <NavLink to='/admin-dashboard/admin' >Dashboard</NavLink>

                                                        }
                                                        {
                                                            isToureGide && <NavLink to='/toureguide-dashboard/guide' >Dashboard</NavLink>
                                                        }
                                                        {
                                                            !isAdmin && !isToureGide && <NavLink to='/user-dashboard/users' >Dashboard</NavLink>
                                                        }
                                                    </div>
                                                    <Link to='/newslate' className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
                                                        <svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                                        </svg>
                                                        Newsletter
                                                    </Link>



                                                    <div onClick={handelLogOut} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
                                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                        </svg>
                                                        Log Out
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div> : <Link to='/login' className="flex items-center font-medium text-white gap-x-2 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                        </svg>
                                        Log in
                                    </Link>
                                }


                            </div>
                        </div>
                    </div>
                </nav>
            </header>



            {/* Search modal */}

            <div id="hs-overlay-top" className="hs-overlay hs-overlay-open:translate-y-0 -translate-y-full fixed top-0 inset-x-0 transition-all duration-300 transform max-h-40 h-full w-full z-[60] bg-white border-b dark:bg-gray-800 dark:border-gray-700 hidden" tabIndex="-1">
                <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                        Search Your Tour place
                    </h3>
                    <button type="button" className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-gray-500 rounded-md hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-overlay-top">
                        <span className="sr-only">Close modal</span>
                        <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center justify-center p-4">
                    <SearchData></SearchData>
                </div>
            </div>

        </div>
    );
};

export default Header;