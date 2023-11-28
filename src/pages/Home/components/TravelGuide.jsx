import React, { useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import VedioContain from './TabComponents/VedioContain';
import OurPackage from './TabComponents/OurPackage';
import MeetTourGuide from './TabComponents/MeetTourGuide';

const TravelGuide = () => {
    const [tabIndex, setTabIndex] = useState(1);
    return (
        <div className='dark:bg-gray-900'>
            <div class="max-w-2xl mx-auto text-center py-10">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Tourism and Travel Guide</h2>
                <p class="mt-1 text-gray-600 dark:text-gray-400">Stay in the know with insights from industry experts.</p>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
                <TabList className='flex items-center justify-center border-b-2 dark:text-white'>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <VedioContain></VedioContain>
                </TabPanel>
                <TabPanel>
                    <OurPackage></OurPackage>
                </TabPanel>
                <TabPanel>
                    <MeetTourGuide></MeetTourGuide>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TravelGuide;