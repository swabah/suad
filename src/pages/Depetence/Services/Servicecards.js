import React from 'react'
import { motion } from 'framer-motion';

function Servicecards(props) {

  return (
    <motion.div className='w-full h-auto  lg:p-0.5 xl:p-2'>
      <div  className="relative cursor-pointer drop-shadow-lg w-full h-full block overflow-hidden md:rounded-lg md:border-2 p-1 pb-0 border-gray-200 ">
       {/* <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#36bd70] to-[#1c415d]"></span> */}
       <div className='w-full py-2 md:px-2  md:p-1 h-auto lg:h-44 xl:h-52'>
        <img className='w-full md:rounded-lg  h-full object-cover' src={props.img} alt="" />
       </div>
       <div className='w-full h-full flex flex-col md:px-3 md:py-3 pb-4 items-start justiyf-center'>
        <h2 className='text-[#1c415d] text-lg lg:text-base xl:text-lg font-bold'>{props.title}</h2>
        <p className='text-gray-600 font-thin lg:text-sm xl:text-base break-all'>{props.para}</p>
       </div>
      </div>
    </motion.div>
  )
}

export default Servicecards
