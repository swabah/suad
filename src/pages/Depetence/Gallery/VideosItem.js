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
    className='w-full h-full  lg:p-0.5 xl:p-2' key={props.id}
    >
        <div className='relative w-full h-44 lg:h-[470px] flex flex-col rounded shadow-lg gap-y-5 bg-gray-200 border'>
          <iframe className='absolute w-full h-full rounded-md object-cover' width="560" height="315" src={`https://www.youtube.com/embed/${props.vidID}?si=RQuoBONnNUt-ZRVw`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </motion.div>   
  )
}

export default VideosItem
