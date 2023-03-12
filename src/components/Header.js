import {React, useState} from 'react'
import { motion } from 'framer-motion';
import Banner from './Banner';
import Nav from './Nav';


function Header() {
  
   
  return <>
  <motion.div
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1, delay: 1 }}
			// transition={{
			// 	ease: 'easeInOut',
			// 	duration: 0.7,
			// 	delay: 0.15,
			// }}
      className='w-full relative '
       > 
		   <div className='w-full h-auto '>
		    <Nav/>
		   </div>
      </motion.div>
  </>
}

export default Header
