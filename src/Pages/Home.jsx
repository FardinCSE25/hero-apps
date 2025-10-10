import React from 'react';
import Hero from '../Components/Banner';
import Banner from '../Components/States';
import TrendingApp from '../Components/TrendingApp';
import useApps from '../../useApps';
import AppError from '../Components/AppError';

const Home = () => {
    // const allApps = useLoaderData()
    const {apps, loading} = useApps()
    // console.log(allAppsData);
    
    const trendingApps = apps.slice(0,8)

    // console.log(trendingApps);
    
    return (
        <div>
            {/* <Hero/>
            <Banner/> */}
            <TrendingApp trendingApps={trendingApps} loading={loading}/>
        </div>
    );
};

export default Home;