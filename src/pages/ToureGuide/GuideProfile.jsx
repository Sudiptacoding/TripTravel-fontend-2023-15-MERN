import React from 'react';
import { useContext } from 'react';
import { UserProvider } from '../../context/AuthContext';
import moment from 'moment';
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import useUserRating from '../../hooks/useUserRating';
import NoDataHere from '../../common/NoDataHere';

const GuideProfile = () => {
    const { user } = useContext(UserProvider)
    const { allcomment } = useUserRating()

    const axiosData = useAxios()
    const handelSubmitStory = (e) => {
        e.preventDefault()
        const userName = user?.displayName || null;
        const userEmail = user?.email || null;
        const userPhoto = user?.photoURL || null;
        const category = e.target.category.value;
        const education = e.target.education.value;
        const skills = e.target.skills.value;
        const contact = e.target.contact.value;
        const price = parseInt(e.target.price.value);
        const textarea = e.target.textarea.value;
        const time = moment().format('LL')
        const storyData = { userName, userEmail, userPhoto, time, category, price, textarea, education, skills, contact }
        axiosData.post('/guidePost', storyData)
            .then(res => {
                toast.success('Story Post Successfully!')
                e.target.reset()
            })
    }

    return (
        <section className="min-h-screen bg-white dark:bg-gray-900">
            <Helmet>
                <title>TripsTravel | TourGuide</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-10">
                    <div className="lg:w-1/2 lg:mx-10">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">Let’s talk</h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Ask us everything and we would love
                            to hear from you
                        </p>

                        <form onSubmit={handelSubmitStory} className="mt-12">
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                    <input disabled value={user?.displayName} type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input disabled value={user?.email} type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                    Tour Type
                                </label>
                                <select required name='category' id="af-submit-app-category" className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-11 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                    <option selected>Select Your Tour Type</option>
                                    <option value='City Tours'>City Tours</option>
                                    <option value='Cultural Tours'>Cultural Tours</option>
                                    <option value='Historical Tours'>Historical Tours</option>
                                    <option value='Adventure Tours'>Adventure Tours</option>
                                    <option value='Food Tours'>Food Tours</option>
                                    <option value='Nature Tours'>Nature Tours</option>
                                    <option value='Architecture Tours'>Architecture Tours</option>
                                    <option value='Nightlife Tours'>Nightlife Tours</option>
                                    <option value='Educational Tours'>Educational Tours</option>
                                    <option value='Sports Tours'>Sports Tours</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                    Price
                                </label>
                                <input name='price' id="af-submit-app-project-name" type="number" className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-11 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter Service Price" />
                            </div>



                            <div className="space-y-2">
                                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                    Education & Skills
                                </label>
                                <div class="sm:flex">
                                    <input name='education' type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Education" />
                                    <input name='skills' type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Skills" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                    Contact
                                </label>
                                <input name='contact' id="af-submit-app-project-name" type="number" className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-11 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter your contact number" />
                            </div>


                            <div className="space-y-2">
                                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                    Description
                                </label>
                                <textarea name='textarea' id="af-submit-app-description" className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows="6" placeholder="write your service description .."></textarea>
                            </div>

                            <button type='submit' className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                get in touch
                            </button>
                        </form>
                    </div>

                    <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                        <img className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src={user?.photoURL} alt="" />
                        <div className="mt-6 space-y-8 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                    {user?.reloadUserInfo?.localId}
                                </span>
                            </p>
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>

                                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">  {user?.reloadUserInfo?.lastRefreshAt}</span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>

                                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">{user?.email}</span>
                            </p>
                        </div>

                        <div className="mt-6 w-80 md:mt-8">
                            <h3 className="text-gray-600 dark:text-gray-300 ">Show User Review</h3>

                            {
                                allcomment?.length > 0 ?
                                    <div class="hs-accordion-group">
                                        {
                                            allcomment?.map((item, i) => {
                                                return <div class="hs-accordion active" id="hs-basic-heading-one">
                                                    <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-collapse-one">
                                                        <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                        <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                                        {item?.name} ({item?.rating}star)
                                                    </button>
                                                    <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-one">
                                                        <p class="text-gray-800 dark:text-gray-200">
                                                            {item?.comment}
                                                        </p>
                                                    </div>
                                                </div>
                                            })
                                        }





                                    </div>

                                    : <NoDataHere></NoDataHere>
                            }





                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuideProfile;