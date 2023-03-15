
import SubHeadings from '../components/SubHeadings';
import library from './img/img15.jpeg'
import { useState } from 'react';
import { FaSortDown, FaSortUp } from 'react-icons/fa';

const Library = () => {
	const [show1, setshow1] = useState();
	const [show2, setshow2] = useState();
	const [show3, setshow3] = useState();
	return (
		<div className='bg-white '>
			<SubHeadings subheading='Baithul Hikma'/>
			<div className='px-2 md:px-7 lg:px-20   mt-12  mb-12'>
				<div className='w-full  flex flex-col items-start select-none '>
        		  	<h2  className='text-base md:text-xl uppercase p-1 shadow-sm w-auto h-auto flex items-center px-5 rounded border bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
        		  	   <span className='uppercase '>Baithul Hikma</span> 
        		  	</h2>
        		</div>
				<div className='relative shadow-lg flex flex-col lg:flex-row items-start  w-full justify-between  lg:mt-8 '>
					<img className=' inner-shadow-md w-full w-full h-auto lg:h-[400px] object-cover bg-top rounded   mt-5 lg:mt-0 ' src={library} alt="" />
					<div className='absolute top-0   bg-gradient-to-b from-[#000000e8] to-transparent h-full w-full inner-shadow-md rounded-t'></div>
					<span className='absolute top-0 p-5 z-10 text-sm md:text-base text-[#ffff] drop-shadow-lg shadow-black tracking-wide capitalize whitespace-normal '>Exhibiting as unrivalled knowledge centre 'Baitul Hikma Library' is the main attraction of Ahlussufa Dars.  contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities. It is equipped with advanced systems such as air-conditioning and tele-casting to provide a better learning experience for the students.  Periodicals, student-run magazines, and journal articles are also available here.</span>	
				</div>
				<div className='mt-16'>
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
		</div>
	);
};

export default Library;

