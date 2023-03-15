import React from 'react'
import { motion } from 'framer-motion'

function PhotosItem(props) {
  return (      
    <motion.div
    initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
    className='w-full h-full' key={props.id}
    >
      <img className='w-full  h-full rounded object-cover' src={props.img} alt="" />
    </motion.div>
  )
}

export default PhotosItem
