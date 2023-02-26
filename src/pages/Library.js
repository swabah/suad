import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Book from './Depetence/Library/Book'

function Library() {
  return (
    <body className="antialiased text-[#1c415d] w-full px-5 md:px-12 lg:px-20 xl:px-44 mt-16 font-sans bg-white">
        <div class="container mx-auto ">
            <div class="py-8">
                <div>
                    <h2 class="text-2xl font-semibold leading-tight">Book Lists</h2>
                </div>
                <div class="my-2 flex sm:flex-row flex-col">
                    <div class="flex flex-row mb-1 sm:mb-0">
                        
                        <div class="relative">
                            <select
                                class="appearance-none h-full rounded-l border  block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                <option>All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="block relative">
                        <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input placeholder="Search"
                            class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Book name
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Writer
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <Book name='avatar' writer='swabah' price="50" status="active"/>
                                <Book name='avatar' writer='swabah' price="50" status="active"/>
                                <Book name='avatar' writer='swabah' price="50" status="active"/>
                            </tbody>
                        </table>
                        <div class="px-5 py-8 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <div className='flex items-center justify-center w-auto h-auto'>
                            <div className='p-3 px-4 bg-gray-200 border rounded-l-lg'><FaChevronLeft/></div>
                               <div className='p-2 px-4 border'>1</div>
                               <div className='p-2 px-4 border'>2</div>
                               <div className='p-2 px-4 border'>3</div>
                               {/* <div className='p-1 px-3 border text-2xl'>+</div> */}
                            <div className='p-3 px-4 bg-gray-200 border rounded-r-lg'><FaChevronRight/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
  )
}

export default Library
