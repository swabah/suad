import React from 'react'
import SubHeadings from '../components/SubHeadings'
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs'
import PhotosItem from './Depetence/Gallery/PhotosItem'
import { GallaryData } from '../data/GallaryData'

function Photos() {
  return (
    <div className='w-full h-auto bg-white  '>
      <SubHeadings subheading='Photos'/>
      <div className='w-full text-[#1c415d] h-full  px-2 md:px-7 lg:px-20  mt-12'>
        <div className=' rounded w-full h-full p-2 md:p-3 lg:p-5'>
          <div className='w-full h-auto flex space-x-2'>
            {/* <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold '>Photos View <snap className="after:content-['*'] font-medium after:ml-0.5 after:text-red-500"></snap></h2> */}
          </div>
            <Tabs className='w-full h-full mt-9 rounded-md inner-shadow-lg '>
               <TabList className=' flex  w-full bg-white h-full border-b'>
                 <Tab className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-b-4 border-transparent hover:border-[#00ab4e] pr-3'>
                     {/* <span class="inline-flex justify-center items-center ml-3">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                     </span> */}
                     <span class="ml-1 pr-2 text-sm tracking-wide truncate">Dars Ground</span>
                     <span class=" px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
                 </Tab>
               </TabList>
                 <TabPanel className='w-full h-full pt-5  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto items-center gap-5'>
                     {GallaryData.PhotosData.map((imgdata)=>(
                         <PhotosItem img={imgdata.img} id={imgdata.id} />
                     ))}
                 </TabPanel>
            </Tabs>

        </div> 
      </div>
    </div>
  )
}

export default Photos
