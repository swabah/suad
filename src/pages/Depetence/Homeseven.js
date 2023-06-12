import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LinkTags from '../../assets/LinkTags'
import { EventData } from '../../data/EventlistData'
import { useState } from 'react';
import Eventmodal from '../../assets/Eventmodal';


function Homeseven() {
  const [showModal, setShowModal] = useState(false);

	function showEventModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

  const navigate = useNavigate()
  return (
    <div className='w-full space-y-5 text-[#1c415d] h-auto bg-gray-100  px-3 md:px-7 lg:px-20  py-7 md:py-10 lg:py-12 xl:py-14 '>
     <div className='w-full flex items-center md:pt-1  pb-2 justify-between'>
       <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Program & Occasions</h2>
       <Link to='/Event'>
          <LinkTags name='View All' to='/event'/>
       </Link>
     </div>
     <div className='mt-3 md:mt-5 w-full h-auto grid grid-cols-2 md:grid-cols-4  gap-3 md:gap-5 gird-rows-auto  items-center justify-center'>
        {EventData.slice(0,4).map((events)=>(
         <div className='w-full h-auto ' onClick={showEventModal}>
          <div onClick={()=>  navigate(`/${events.id}`) } className="cursor-pointer block rounded-lg  bg-transparent shadow-indigo-100 w-full h-full">
              <img alt="Home" src={events.imgE}  className="w-full h-auto drop-shadow-md object-cover" />
              <div className="mt-1 lg:mt-2          w-full h-full">
                <div>
                  <div>
                    <h2 className="text-xs lg:text-sm font-medium pt-2 text-[#1c415d] uppercase">{events.head}</h2>
                  </div>
                  <div>
                    <h2 id='Eventtext' className="select-none py-0.5 lg:py-2 lg:py-0 lg:pb-2 xl:py-2 mt-0.5 lg:mt-1.5 font-normal text-xs whitespace-nowrap overflow-y-hidden ">{events.para}</h2>
                  </div>
                </div>
              </div>
           </div>
           </div>
         ))}
     </div>
     {showModal ? (
				<Eventmodal
          closePath='/'
					onClose={showEventModal}
					onRequest={showEventModal}
				/>
			) : null}
			{showModal ? showEventModal : null}
   </div>
  )
}

export default Homeseven
