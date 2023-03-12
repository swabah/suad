import React from 'react'
import SubHeadings from '../components/SubHeadings'
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs'
import VideosItem from './Depetence/Gallery/VideosItem'
import { GallaryData } from '../data/GallaryData'


function Videos() {
  return (
    <div className='w-full h-auto   mt-[60px] md:mt-[77px] lg:mt-[90px]'>
      <SubHeadings subheading='Videos'/>
      <div className='w-full text-[#1c415d] h-full  px-2 md:px-7 lg:px-20  mt-1126'>
        <div className=' rounded w-full h-full p-2 md:p-3 lg:p-5'>
          <div className='w-full h-auto flex space-x-2'>
            {/* <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold '>Photos View <snap className="after:content-['*'] font-medium after:ml-0.5 after:text-red-500"></snap></h2> */}
          </div>
            <Tabs className='w-full h-full mt-9 rounded-md inner-shadow-lg '>
               <TabList className=' flex  w-full bg-white h-full border-b'>
                 <Tab className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-b-4 border-transparent hover:border-[#00ab4e] pr-3'>
                     <span class="inline-flex justify-center items-center ml-3">
                     <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                     
                     </span>
                     <span class="ml-2 text-sm tracking-wide truncate">Suffa mehfil</span>
                     <span class="ml-1 px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
                 </Tab>
               </TabList>
                 <TabPanel className='pt-6 w-full h-auto flex-wrap flex  gap-y-3   items-center justify-between'>
                     {GallaryData.VideosData.map((viddata)=>(
                         <VideosItem  vid={viddata.vid} tag={viddata.tag} title={viddata.title} id={viddata.id}/>
                     ))}
                 </TabPanel>
            </Tabs>

        </div> 
      </div>
    </div>
  )
}

export default Videos
