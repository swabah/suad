import React from 'react'
import SubHeadings from '../components/SubHeadings'
import PhotosItem from './Depetence/Gallery/PhotosItem'
import { GallaryData } from '../data/GallaryData'
import '../pages/Depetence/Style.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import './Depetence/Style.css'

function Photos() {

    return (
        <div className='w-full h-auto bg-white  '>
            <SubHeadings subheading='Photos' />
            <div className='w-full text-[#1c415d] h-full  px-2 md:px-7 lg:px-20  mt-12'>
                <div className=' rounded w-full h-full'>
                    <Tabs className='w-full h-full'>
                        <TabList className='py-2 scrollshade overflow-y-hidden'>
                            <Tab className='flex items-center'>
                                <span class=" pr-2 text-xs md:text-sm tracking-wide truncate">Dars Ground</span>
                                <span class=" px-0.5 md:px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 md:rounded-full">New</span>
                            </Tab>
                            <Tab className='flex items-center'>
                                <span class=" pr-2 text-xs md:text-sm tracking-wide truncate">Suffa Mehfil</span>
                                <span class=" px-0.5 md:px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 md:rounded-full">Dec 2K22</span>
                            </Tab>
                            <Tab className='flex items-center'>
                                <span class=" pr-2 text-xs md:text-sm tracking-wide truncate">Suffa Mehfil</span>
                                <span class=" px-0.5 md:px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 md:rounded-full">Jan 2K22</span>
                            </Tab>
                            <Tab className='flex items-center'>
                                <span class=" pr-2 text-xs md:text-sm tracking-wide truncate">Suffa Mehfil</span>
                                <span class=" px-0.5 md:px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 md:rounded-full">2K21</span>
                            </Tab>
                            <Tab className='flex items-center'>
                                <span class=" pr-2 text-xs md:text-sm tracking-wide truncate">sweetrabeeh</span>
                                <span class=" px-0.5 md:px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 md:rounded-full">2K22</span>
                            </Tab>
                        </TabList>

                        <TabPanels className='pt-6'>
                            <TabPanel className='w-full h-full pt-5  grid grid-cols-2 md:grid-cols-3 grid-rows-auto items-center gap-2 md:gap-5'>
                                {GallaryData.DarsGroundPhoto.map((imgdata) => (
                                    <PhotosItem img={imgdata.img} id={imgdata.id} />
                                ))}
                            </TabPanel>
                            <TabPanel className='w-full h-full pt-5  grid grid-cols-2 md:grid-cols-3 grid-rows-auto items-center gap-2 md:gap-5'>
                                {GallaryData.SuffaMehfil2k22Des.map((imgdata) => (
                                    <PhotosItem img={imgdata.img} id={imgdata.id} />
                                ))}
                            </TabPanel>
                            <TabPanel className='w-full h-full pt-5  grid grid-cols-2 md:grid-cols-3 grid-rows-auto items-center gap-2 md:gap-5'>
                                {GallaryData.DarsGroundPhoto.map((imgdata) => (
                                    <PhotosItem img={imgdata.img} id={imgdata.id} />
                                ))}
                            </TabPanel>
                            <TabPanel className='w-full h-full pt-5  grid grid-cols-2 md:grid-cols-3 grid-rows-auto items-center gap-2 md:gap-5'>
                                {GallaryData.SuffaMehfil2k22Jan.map((imgdata) => (
                                    <PhotosItem img={imgdata.img} id={imgdata.id} />
                                ))}
                            </TabPanel>
                            <TabPanel className='w-full h-full pt-5  grid grid-cols-2 md:grid-cols-3 grid-rows-auto items-center gap-2 md:gap-5'>
                                {GallaryData.SuffaMehfil2k21.map((imgdata) => (
                                    <PhotosItem img={imgdata.img} id={imgdata.id} />
                                ))}
                            </TabPanel>
                            <TabPanel className='w-full h-full pt-5  grid grid-cols-2 md:grid-cols-3 grid-rows-auto items-center gap-2 md:gap-5'>
                                {GallaryData.SweetRabeeh.map((imgdata) => (
                                    <PhotosItem img={imgdata.img} id={imgdata.id} />
                                ))}
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Photos
