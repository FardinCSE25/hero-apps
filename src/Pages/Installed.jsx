import React, { useEffect, useState } from 'react';
import ratingIcon from '../assets/icon-ratings.png';
import downloadIcon from '../assets/icon-downloads.png';

const Installed = () => {
    const [installed, setInstalled] = useState([])
    const [sort, setSort] = useState('none')
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('Installed'))
        installedApps && setInstalled(installedApps)
    }, [])

    const sortedApps = (() => {
        if(sort == 'size-d'){
            return [...installed].sort((a,b) => parseFloat(b.size) - parseFloat(a.size)
            )
        }
        else if(sort == 'size-a'){
            return [...installed].sort((a,b) => parseFloat(a.size) - parseFloat(b.size))
        }
        else {
            return installed
        }
    }) ()

    const handleRemove = (id) => {
        const installedApps = JSON.parse(localStorage.getItem('Installed'))
        let updatedInstalledApps = installedApps.filter(app => app.id != id)
        setInstalled(updatedInstalledApps)
        localStorage.setItem('Installed', JSON.stringify(updatedInstalledApps))
    } 


    return (
        <div className='bg-gray-100 inter h-screen'>
            <div className='text-center pt-20'>
                <h1 className='text-5xl font-bold mb-4'>
                    Your Installed Apps
                </h1>
                <p className='font-extralight text-gray-600'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className='w-11/12 mx-auto mt-10'>
                <div className='mb-4 flex justify-between items-center'>
                    <h1 className='inter text-2xl font-semibold'>
                        {installed.length} {(installed.length === 1 || installed.length === 0) ? "App" : "Apps"} Found
                    </h1>
                    <select className='border-2 border-black rounded-md p-1' value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="none">Sort</option>
                      <option value="size-d">High to Low</option>
                      <option value="size-a">Low to High</option>
                    </select>
                </div>
                <div className='bg-gray-100 grid grid-cols-1 gap-4 pb-6'>
                    {
                        sortedApps.map(installedApps => <div className='bg-white py-2 flex items-center justify-between'>
                            <div className='pl-4'>
                                <img className='w-[80px] h-[80px] rounded-sm' src={installedApps.image} alt="app logo" />
                            </div>
                            <div className='flex-1 pl-4'>
                                <h1 className='pb-2 text-xl font-medium'>
                                    {installedApps.title}
                                </h1>
                                <div className='flex gap-4'>
                                    <div className='flex gap-1 items-center'>
                                        <img className='h-4 w-4' src={downloadIcon} alt="" />
                                        <h1 className='text-green-600'>
                                            {installedApps.downloads}
                                        </h1>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <img className='h-4 w-4' src={ratingIcon} alt="star" />
                                        <h1 className='text-yellow-500'>
                                            {installedApps.ratingAvg}
                                        </h1>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <h1 className='text-gray-400'>
                                            {installedApps.size}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='pr-4'>
                                <button onClick={() => handleRemove(installedApps.id)} className='bg-emerald-500 rounded-sm cursor-pointer px-2.5 py-1 text-white'>Uninstall</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installed;