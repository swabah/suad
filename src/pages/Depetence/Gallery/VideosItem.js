import React from 'react'
import { motion } from 'framer-motion'

function VideosItem(props) {

  return (
    <motion.div
    initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
    className='w-full md:w-80 lg:w-1/4  h-auto lg:p-0.5 xl:p-2' key={props.id}
    >
        <div className='relative w-full h-[470px] flex flex-col rounded shadow-lg gap-y-5 bg-gray-200 border'>
          <iframe title='our youtube videos' className='absolute w-full h-full rounded object-cover' src={`http://www.youtube.com/embed/${props.vidID}?modestbranding=0&rel=0`} allowFullScreen></iframe>
          <div className="absolute top-0 bottom-0 rounded-md h-44 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 rounded-md  flex items-center justify-between mx-5 mt-3">
            <p  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 bgundefined">{props.tag}</p>
          </div>
        </div>
    </motion.div>   
  )
}

export default VideosItem
