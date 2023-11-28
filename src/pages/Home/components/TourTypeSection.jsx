import React from 'react';
import { Link } from 'react-router-dom';

const TourTypeSection = () => {

    const selectArea = [
        'City Tours',
        'Cultural Tours',
        'Historical Tours',
        'Adventure Tours',
        'Food Tours',
        'Nature Tours',
        'Architecture Tours',
        'Nightlife Tours',
        'Educational Tours',
        'Sports Tours'
    ]


    return (
        <div className='dark:bg-gray-900'>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="max-w-2xl mx-auto text-center py-10">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our Most Famous Tour Type  </h2>
                </div>

                <div class="flex items-center justify-center  flex-wrap lg:px-36 px-6">

                    {
                        selectArea?.map((item, i) => {
                            return <Link to={`/tourtype/${item}`} key={i} class="col-span-6 text-center border px-8 py-6 cursor-pointer card-ture">
                                <h4 class="text-md md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                                    {item}
                                </h4>
                                <h4 class="text-sm text-gray-600 dark:text-gray-400">
                                    Visit Now
                                </h4>
                            </Link>
                        })
                    }

                </div>

            </div>


        </div>
    );
};

export default TourTypeSection;