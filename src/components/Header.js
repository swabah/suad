import {React, useState} from 'react'
import { Nav } from './Nav'


function Header() {
  
   
  return <>
 	 <div className='w-full relative '> 
		   <div className='w-full h-auto '>
		    <Nav/>
		   </div>
      </div>
  </>
}

export default Header
