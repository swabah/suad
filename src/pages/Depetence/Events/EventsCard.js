import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SingleBook from '../../SingleBook';
import '../Style.css'

function EventsCard(props) {
   const [showBook, setShowBook] = useState(false);

	function showLoginBook() {
		if (!showBook) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowBook(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowBook(false);
		}
	}
  return (
    <motion.div initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}} className='w-full md:w-80 lg:w-1/4  h-auto lg:p-0.5 xl:p-2'>

    <div onClick={showLoginBook}  class="cursor-pointer block rounded-lg p-4 bg-transparent shadow-lg border-2 shadow-indigo-100 w-full h-full">
        <img alt="Home" src={props.imgE}  class="w-full h-auto lg:h-44 xl:h-52 drop-shadow-md rounded-md object-cover" />
        <div class="mt-2 w-full h-full">
          <div>
            <div>
              <h2 class="text-sm font-bold pt-2 text-[#1c415d] uppercase">{props.head}</h2>
            </div>
            <div>
              <h2 id='Eventtext' class="select-none py-2 lg:py-0 lg:pb-2 xl:py-2 mt-1.5 font-medium text-xs whitespace-nowrap overflow-y-hidden ">{props.para}</h2>
              {/* <a href={props.link} class="font-medium text-xs text-blue-700 mt-0.5 underline underline-offset-1">Read more</a> */}
            </div>
          </div>
      
          {/* <div class="mt-4 flex items-center gap-5 text-xs">
            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
            <svg
            class="h-4 w-4 text-indigo-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
      
              <div class="mt-1.5 sm:ml-3 sm:mt-0">
                <p class="text-gray-500">Parking</p>
      
                <p class="font-medium">2 spaces</p>
              </div>
            </div>
      
            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
              <svg
                class="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
      
              <div class="mt-1.5 sm:ml-3 sm:mt-0">
                <p class="text-gray-500">Bathroom</p>
      
                <p class="font-medium">2 rooms</p>
              </div>
            </div>
      
            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
              <svg
                class="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
      
              <div class="mt-1.5 sm:ml-3 sm:mt-0">
                <p class="text-gray-500">Bedroom</p>
      
                <p class="font-medium">4 rooms</p>
                </div>
            </div>
          </div> */}
        </div>
   </div>
   {showBook ? (
		<SingleBook
		    	onClose={showLoginBook}
		    	onRequest={showLoginBook}
		  />
		  ) : null}
		    {showBook ? showLoginBook : null}
     </motion.div>
  )
}

export default EventsCard
