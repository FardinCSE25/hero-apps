import React, { useState } from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import useApps from '../../useApps';
import { Link } from 'react-router';

const Apps = () => {
       const {apps} = useApps()
       const [search, setSearch] = useState('')
       const changedSearch = search.trim().toLocaleLowerCase()
       const searchedApps = changedSearch ? apps.filter(apps => apps.title.toLocaleLowerCase().includes(changedSearch)) : apps


    //    console.log(allApps);
       
    return (
       <div className='bg-gray-100 inter pb-12'>
                   <h1 className='pt-20 pb-6 font-bold text-5xl text-center'>
                       Our All Applications
                   </h1>
                   <p className='text-gray-500 text-center pb-10'>
                       Explore All Apps on the Market developed by us. We code for Millions
                   </p>
                   <div className='pb-4 text-2xl font-semibold w-11/12 mx-auto flex justify-between items-center'>
                    <h1>
                        ({searchedApps.length}) {(searchedApps.length === 1 || searchedApps.length === 0) ? "App" : "Apps"} Found
                    </h1>
                    <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Apps'
          />
        </label>
                   </div>
                   <div className='w-11/12 mx-auto grid grid-cols-4 gap-4 bg-gray-100 pb-10'>
                       {

                           searchedApps.map(apps => {
                               // console.log(apps);
                               
                            return (
                                        
                               <Link to={`/app/${apps.id}`} key={apps.id} className='p-4 bg-white rounded-sm'>
                                   <img className='pb-4 h-60 w-full overflow-hidden rounded-sm' src={apps.image} alt="app logo" />
                                   <h1 className='pb-4'>
                                       {apps.title}
                                   </h1>
                                   <div className='flex justify-between items-center pb-4'>
                                       <div className='bg-gray-100 px-2 py-2 flex justify-between items-center rounded-lg text-[#00D390]'>
                                               <img className='w-[16px] h-[16px]' src={downloadIcon} alt="download logo" />
                                           <h1 className='ml-1'>
                                               {apps.downloads}
                                           </h1>
                                       </div>
                                       <div className='bg-gray-100 px-2 py-2 flex justify-between items-center rounded-lg text-[#FF8811]'>
                                           <img className='w-[16px] h-[16px]' src={ratingIcon} alt="star logo" />
                                           <h1 className='ml-1'>
                                               {apps.ratingAvg}
                                           </h1>
                                       </div>
                                   </div>
                               </Link>
                            );
                           })
                       }
                   </div>
        </div>   
    );
};

export default Apps;