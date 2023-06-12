import React from 'react'
import './Depetence/Style.css'
import { useNavigate } from 'react-router-dom'
import SubHeadings from '../components/SubHeadings'
import { EventData } from '../data/EventlistData'
import { useState } from 'react'
import Eventmodal from '../assets/Eventmodal'

function Events() {
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

    <div className='w-full h-full flex relative flex-col items-center justify-center bg-white  '>
        <SubHeadings subheading='Events'/>
        <div className='w-full h-full flex flex-col space-y-12 items-center justify-center  px-2 md:px-7 lg:px-20  py-8 md:py-16 lg:py-20 '>
             <div className='pt-4 w-full h-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto items-center justify-center gap-3 md:gap-5 '>
               {EventData.map((events)=>(
                 <div className='w-full h-auto ' onClick={showEventModal}>
          
                  <div onClick={()=>  navigate(`/Event/${events.id}`) } className="cursor-pointer block rounded-lg  bg-transparent shadow-indigo-100 w-full h-full">
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
        </div>
             {showModal ? (
			        	<Eventmodal
			        		onClose={showEventModal}
			        		onRequest={showEventModal}
                  closePath='/Event'
			        	/>
			        ) : null}
			        {showModal ? showEventModal : null}
    </div>
  )
}

export default Events



