import React from 'react'
import { motion } from 'framer-motion'
import '../Style.css'
import { useNavigate } from 'react-router-dom'

function EventsCard(props) {

  const navigate = useNavigate()
  return (
    <motion.div initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}} className='w-full h-auto '>

    <div onClick={() => { navigate(`/Event/${props.id}`)}} className="cursor-pointer block rounded-lg  bg-transparent shadow-indigo-100 w-full h-full">
        <img alt="Home" src={props.imgE}  className="w-full h-auto drop-shadow-md object-cover" />
        <div className="mt-1 lg:mt-2 w-full h-full">
          <div>
            <div>
              <h2 className="text-xs lg:text-sm font-medium pt-2 text-[#1c415d] uppercase">{props.head}</h2>
            </div>
            <div>
              <h2 id='Eventtext' className="select-none py-0.5 lg:py-2 lg:py-0 lg:pb-2 xl:py-2 mt-0.5 lg:mt-1.5 font-normal text-xs whitespace-nowrap overflow-y-hidden ">{props.para}</h2>
              {/* <a href={props.link} className="font-medium text-xs text-blue-700 mt-0.5 underline underline-offset-1">Read more</a> */}
            </div>
          </div>
        </div>
   </div>
     </motion.div>
  )
}

export default EventsCard
