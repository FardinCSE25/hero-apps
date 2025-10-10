import React from 'react';
import Hero from '../Components/Banner';
import Banner from '../Components/States';
import TrendingApp from '../Components/TrendingApp';
import useApps from '../../useApps';

const Home = () => {
    const { apps, loading } = useApps()
    const trendingApps = apps.slice(0, 8)

    return (
        <div>
            <Hero />
            <Banner />
            <TrendingApp trendingApps={trendingApps} loading={loading} />
        </div>
    );
};

export default Home;