

import BooksGrid from './Depetence/Library/Booksgrid';
import { BooksProvider } from '../Context/BooksContext';
import { motion } from 'framer-motion';
import SubHeadings from '../components/SubHeadings';
import library from './img/img15.jpeg'
import { useState } from 'react';
import { FaSortDown, FaSortUp } from 'react-icons/fa';

const Library = () => {
	const [show1, setshow1] = useState();
	const [show2, setshow2] = useState();
	const [show3, setshow3] = useState();
	return (
		<div className=' mt-[60px] md:mt-[77px] lg:mt-[90px]'>
			<SubHeadings subheading='Baithul Hikma'/>
			<div className='px-2 md:px-7 lg:px-20  py-6 md:py-8  '>
				<div className='flex flex-col lg:flex-row items-start pb-5 w-full justify-between  lg:mt-10'>
					<div className='lg:order-2 lg:pl-5 xl:pl-0 w-full lg:w-2/3 space-y-2 md:space-y-5 flex flex-col items-start select-none '>
        			  	<h2  className='text-base md:text-xl uppercase p-1 shadow-sm w-auto h-auto flex items-center px-5 rounded border bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
        			  	   <span className='uppercase '>Baithul Hikma</span> 
        			  	</h2>
						<p className='text-sm md:text-base text-[#1c415d]'>Exhibiting as unrivalled knowledge centre 'Baitul Hikma Library' is the main attraction of Ahlussufa Dars.  contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities. It is equipped with advanced systems such as air-conditioning and tele-casting to provide a better learning experience for the students.  Periodicals, student-run magazines, and journal articles are also available here.</p>
        			</div>
					<img className='  w-full lg:w-auto h-auto lg:h-56 rounded shadow-lg  mt-5 lg:mt-0 ' src={library} alt="" />
				</div>
				<div className='mt-8'>
					<div className='cursor-pointer relative flex items-center justify-between'>
					 <h2 onClick={()=>{setshow1(!show1)}} className='bg-[#72bf44] text-white text-sm pr-8   md:text-lg  uppercase w-full rounded-t px-5  transition duration-500 py-3'>Integrated studies between Islam  science</h2>
					 <p className={`absolute  ${show1 ? 'hidden top-3':''} text-2xl top-1.5 transition duration-500 transform text-white right-5`}> <FaSortDown/></p> 
					 <p className={`absolute top-4 ${show1 ? 'flex':'hidden'} text-2xl text-white right-5`}> <FaSortUp/></p> 
					</div>
					 <h2 className={`bg-[#72bf44] ${ show1 ? "py-3 h-full text-opacity-90" : "h-0 py-0"} text-white  transition duration-500 capitalize text-xs md:text-base  w-full rounded-b px-5`}>Integrated studies between Islam  science Complete degree in science disciplines</h2>
				</div>
				<div className='mt-5'>
					<div className='cursor-pointer relative flex items-center justify-between'>
					 <h2 onClick={()=>{setshow2(!show2)}} className='bg-[#72bf44] text-white text-sm pr-8   md:text-lg  uppercase w-full rounded-t px-5 py-3'>Integrated studies between Islam  science</h2>
					 <p className={`absolute top-1.5 ${show2 ? 'hidden':'flex'} text-2xl text-white right-5`}> <FaSortDown/></p> 
					 <p className={`absolute top-4 ${show2 ? 'flex':'hidden'} text-2xl text-white right-5`}> <FaSortUp/></p> 
					</div>
					 <h2 className={`bg-[#72bf44] ${ show2 ? "py-3 h-full text-opacity-90" : "h-0 py-0"} text-white transition capitalize  w-full text-xs md:text-base rounded-b px-5`}>Integrated studies between Islam  science Complete degree in science disciplines</h2>
				</div>
				<div className='mt-5'>
					<div className='cursor-pointer relative flex items-center justify-between'>
					 <h2 onClick={()=>{setshow3(!show3)}} className='bg-[#72bf44] text-white text-sm pr-8   md:text-lg  uppercase w-full rounded-t px-5 py-3'>Integrated studies between Islam  science</h2>
					 <p className={`absolute top-1.5 ${show3 ? 'hidden':'flex'} text-2xl text-white right-5`}> <FaSortDown/></p> 
					 <p className={`absolute top-4 ${show3 ? 'flex':'hidden'} text-2xl text-white right-5`}> <FaSortUp/></p> 
					</div>
					 <h2 className={`bg-[#72bf44] ${ show3 ? "py-3 h-full text-opacity-90" : "h-0 py-0"} text-white transition capitalize  w-full text-xs md:text-base rounded-b px-5`}>Integrated studies between Islam  science Complete degree in science disciplines</h2>
				</div>
				<div className='mt-12'>
					<h2 className='font-medium text-lg text-[#1c415d] cursor-progress'>Loading features...</h2>
				</div>
			</div>
		{/* <BooksProvider>
			<div className="px-2 md:px-7 lg:px-20  py-4 md:py-8 ">
				<BooksGrid />
			</div>
		</BooksProvider> */}
		</div>
	);
};

export default Library;

