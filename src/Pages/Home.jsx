import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import TrendingApp from '../Components/TrendingApp';
import { useLoaderData } from 'react-router';

const Home = () => {
    const trendingApps = useLoaderData()
    // console.log(trendingApps);
    
    return (
        <div>
            <Hero/>
            <Banner/>
            <TrendingApp trendingApps={trendingApps}/>
        </div>
    );
};

export default Home;