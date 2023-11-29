import React from 'react';

const VedioContain = () => {
    return (
        <div>
            <div class="max-w-2xl mx-auto text-center pt-10">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Meet the crew</h2>
                <p class="mt-1 text-gray-600 dark:text-gray-400">Creative people</p>
            </div>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div>
                            <iframe className='w-full h-[230px] rounded-lg' src="https://www.youtube.com/embed/pzs-xU4mTXg?si=kls1qKt3Sa7Q5fcA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div>
                            <iframe className='w-full h-[230px] rounded-lg' src="https://www.youtube.com/embed/35npVaFGHMY?si=a2Dafvh2bRhg3_uK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div>
                            <iframe className='w-full h-[230px] rounded-lg' src="https://www.youtube.com/embed/cZUCSSo2wQk?si=SIcLLhTHMjc7Jqet" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div>
                            <iframe className='w-full h-[230px] rounded-lg' src="https://www.youtube.com/embed/4SHgwHpVXFE?si=0AyPWspv2hhkElCz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div>
                            <iframe className='w-full h-[230px] rounded-lg' src="https://www.youtube.com/embed/q-TlYyZGOfQ?si=oDEP6j1e1qNhs1aV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div>
                            <iframe className='w-full h-[230px] rounded-lg' src="https://www.youtube.com/embed/z4avWuJ9Ta8?si=D_jFPjYjwtLR5az2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VedioContain;