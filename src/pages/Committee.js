import React, { useState } from 'react'
import Muad from './Depetence/Committee/Muad'
import Suad from './Depetence/Committee/Suad'
import SubHeadings from '../components/SubHeadings'
import LoginModal from '../assets/LoginModal'

function Committee() {
  const [showModal, setShowModal] = useState(false);

	function showLoginModal() {
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

  // const [fix, setfix] = useState(false);
  // const Changecolor = () =>{
  //    if (window.scrollY >= 20) {
  //      setfix(true)
  //    }else (
  //      setfix(false)
  //    ) 
  // }
  // window.addEventListener('scroll' , Changecolor)
  
  return (
    <div className='w-full text-[#1c415d] h-auto pb-12 bg-white '>
      <SubHeadings subheading='Working Committee'/>
      <div className='w-full   px-2 md:px-5 lg:px-20  mt-12'>
        <Suad/>
        <Muad/> 
        <div className={`mt-10  `}>
            <div className='w-full h-auto  flex  items-start'>
              <h2  className='text-lg  uppercase shadow-lg w-full h-auto flex items-center justify-between  rounded  bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
                 <span className=' text-sm  px-4'>students Corner</span>
			 	        <span
				        	onClick={showLoginModal}
				        	className="text-md font-general-medium text-white w-auto h-full rounded-md  duration-300"
				        	aria-label="Login to Ahlussuffa"
				        >
				        	<div className='w-auto h-full text-gray-600 bg-gray-200 '>
                         <button className='text-sm py-2 px-4 items-center tracking-wide shadow-sm flex font-semibold hover:bg-gray-300 rounded '>LOGIN</button>
                  </div>
				        </span>
              </h2>
            </div>
            <div>
               {showModal ? (
			        	<LoginModal
			        		onClose={showLoginModal}
			        		onRequest={showLoginModal}
			        	/>
			        ) : null}
			        {showModal ? showLoginModal : null}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Committee
