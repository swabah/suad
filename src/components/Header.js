import {React, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaYoutubeSquare,FaInstagram,FaFacebook, FaTable } from "react-icons/fa";
import logo from './ahlussuffalogo.png'
import Navbar from './Navbar';
import links from '../assets/Links';
import LoginModal from './LoginModal';
// import Dropdown from './Dropdown';


function Header() {
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

  return <>
      <header className='bg-[#e6eaed] w-full sticky z-50 top-0 flex flex-col h-auto relative'>
      <div className='w-full h-8 py-3 md:py-0 space-y-2 md:space-y-0 md:h-10 bg-[#032c4b] flex-col md:flex-row items-center justify-center md:justify-between flex px-5 md:px-12 lg:px-20 xl:px-44'>
            <div className='flex space-x-1 w-full justify-between md:justify-start items-center h-5 text-sm text-gray-200  font-thin'>
                <Link className='border-r-2 pr-10 md:pr-1 border-gray-500 hover:border-gray-600 transition hover:text-gray-500'  to='/'  >Home</Link>
                <Link className='border-r-2 pr-10 md:pr-1 border-gray-500 hover:border-gray-600 transition hover:text-gray-500'  to='/event'  >Events</Link>
                <Link className='border-r-2 pr-10 md:pr-1 border-gray-500 hover:border-gray-600 transition hover:text-gray-500'  to=''  >Blog</Link>
                <Link className=' transition hover:text-gray-500'  to=''  >News</Link>
            </div>
         <div className=' items-center justify-between hidden md:flex md:justify-end w-full text-xl text-gray-300 space-x-1 '>
            <div className='flex space-x-1 '>
            <a className='transition hover:text-gray-500' href={links.youtube.url}><FaYoutubeSquare/></a>
            <a className='transition hover:text-gray-500' href={links.instagram.url}><FaInstagram/></a>
            <a className='transition hover:text-gray-500 pr-5' href={links.facebook.url}><FaFacebook/></a>
            </div>
            <div className="hidden md:flex">
						<span
							onClick={showLoginModal}
							className="text-md font-general-medium text-white w-auto h-auto rounded-md px-5 py-2.5 duration-300"
							aria-label="Login to Ahlussuffa"
						>
							<div className='w-auto h-full text-gray-600'>
                     <button className='px-4 py-0.5 text-sm items-center flex bg-gray-200 font-medium hover:bg-gray-300 rounded'>LOGIN</button>
                   </div>
						</span>
				</div>
            
         </div>
      </div>
         <div className="flex justify-between  items-center h-22 py-1.5 bg-white shadow-md px-5 md:px-12 lg:px-20 xl:px-44">
           <Link className='' to='/'>
              <img className='h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 bg-center object-fill' src={logo} alt="Logo" />
           </Link>
           <Navbar />
           <div className='flex md:hidden'>
           <FaTable/>
           </div>
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
       </header>
     {/* <header className="fixed inset-0 bg-white w-screen flex flex-col h-auto relative">
      <div className='w-full h-10 bg-[#032c4b] flex items-center justify-between px-44'>
      <div className=''>
            <div className='flex space-x-1  h-5 text-sm text-gray-200  font-thin'>
                <Link className='border-r-2 pr-1 border-gray-500 hover:border-gray-600 transition hover:text-gray-500'  to='/'  >Home</Link>
                <Link className='border-r-2 pr-1 border-gray-500 hover:border-gray-600 transition hover:text-gray-500'  to=''  >Events</Link>
                <Link className='border-r-2 pr-1 border-gray-500 hover:border-gray-600 transition hover:text-gray-500'  to=''  >Blog</Link>
                <Link className=' transition hover:text-gray-500'  to=''  >News</Link>
            </div>
         </div>
         <div className='flex items-center text-xl text-gray-300 space-x-1 '>
            <a className='transition hover:text-gray-500' href="https://open.spotify.com/"><FaYoutubeSquare/></a>
            <a className='transition hover:text-gray-500' href="https://open.spotify.com/"><FaInstagram/></a>
            <a className='transition hover:text-gray-500 pr-5' href="https://open.spotify.com/"><FaFacebook/></a>
            <div className='w-auto h-full text-gray-600'>
               <button className='px-4 py-0.5 text-sm items-center flex bg-gray-200 font-medium hover:bg-gray-300 rounded'>LOGIN</button>
            </div>
         </div>
      </div>
        <div className='flex w-full justify-between items-center h-22 py-3 bg-white px-44'>
         <Link className='' to='/'>
            <img className='h-20 w-20 bg-center object-fill' src={logo} alt="Logo" />
         </Link>
            <div className='hidden text-lg text-[#666666] font-thin  md:flex items-start space-x-9'>
               <Link className=''  to='/know'  >
                 <Dropdown name="Know'Us" />
               </Link>
               <Link className=''  to='/media' >
                  <Dropdown name="Media" />
               </Link>
               <Link className=''  to='/Admition' >
                 <Dropdown name="Admition" />
               </Link>
               <Link className=''  to='/Academy' >
                 <Dropdown name="Academy" />
               </Link>
           </div>
        </div>
     </header> */}
  </>
}

export default Header
