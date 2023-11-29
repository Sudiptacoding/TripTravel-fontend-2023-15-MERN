import React from 'react';
import Banner from './components/Banner';
import TravelGuide from './components/TravelGuide';
import TouristStory from './components/TouristStory';
import TourTypeSection from './components/TourTypeSection';
import Overlay from './components/Overlay';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div className='dark:bg-gray-900'>
            <Helmet>
                <title>TripsTravel | Home</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Banner></Banner>
            <TravelGuide></TravelGuide>
            <TourTypeSection></TourTypeSection>
            <TouristStory></TouristStory>
            <Overlay></Overlay>
        </div>
    );
};

export default Home;