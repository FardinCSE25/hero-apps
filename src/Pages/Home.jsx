import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import TrendingApp from '../Components/TrendingApp';
import useApps from '../../useApps';

const Home = () => {
    // const allApps = useLoaderData()
    const {apps} = useApps()
    // console.log(allAppsData);
    
    const trendingApps = apps.slice(0,8)

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