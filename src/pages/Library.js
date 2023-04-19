
import SubHeadings from '../components/SubHeadings';
import library from './img/img15.jpeg'
import { Fragment, useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'

const Library = () => {

	const [open, setOpen] = useState(1);
 
	const handleOpen = (value) => {
	  setOpen(open === value ? 0 : value);
	};
	
	return (
		<div className='bg-white '>
			<SubHeadings subheading='Baithul Hikma'/>
			<div   className='px-2 md:px-7 lg:px-20   pt-12  pb-12 '>
				<div className='w-full hidden md:flex flex-col items-start select-none '>
        		  	<h2  className='text-base md:text-xl uppercase p-1 shadow-sm w-auto h-auto flex items-center px-5 rounded bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
        		  	   <span className='uppercase '>Baithul Hikma</span> 
        		  	</h2>
        		</div>
				<div className='  text-[#1c415d] md:mt-10  mb-12 w-full h-full'>
        		    <div className='items-center w-full h-auto md:p-5 rounded-lg md:shadow-lg md:border grid grid-cols-1 gap-5 md:gap-0 grid-rows-auto lg:grid-cols-4'>
        		        <img className='object-cover w-full lg:w-96 h-52 md:rounded drop-shadow-md' src={library} alt="" />
        		        <p className='md:col-span-3 md:px-3 lg:px-6 xl:px-10 lg:text-lg'>Exhibiting as unrivalled knowledge centre 'Baitul Hikma Library' is the main attraction of Ahlussufa Dars.  contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities. It is equipped with advanced systems such as air-conditioning and tele-casting to provide a better learning experience for the students.  Periodicals, student-run magazines, and journal articles are also available here.</p>
        		    </div>
        		</div>
				<Fragment >
   				   <Accordion className='mt-8 lg:mt-12 ' open={open === 1}>
   				     <AccordionHeader className='border-none text-sm backdrop-shadow-lg md:text-base lg:text-base xl:text-lg w-full h-full bg-[#72bf44] px-1 md:px-2 lg:px-4 xl:px-6 text-white drop-shadow-lg font-normal capitalize shadow-md' onClick={() => handleOpen(1)}>
						Integrated studies between Islam  science Complete degree in science disciplines
   				     </AccordionHeader>
   				     <AccordionBody className='border-none bg-opacity-90 text-sm md:text-base lg:text-base xl:text-lg w-full h-full bg-[#72bf44] px-1 md:px-2 lg:px-4 xl:px-6 text-white drop-shadow-lg shadow-md'>
						Integrated studies between Islam  science Complete degree in science disciplines
   				     </AccordionBody>
   				   </Accordion>
   				   <Accordion className='mt-4 lg:mt-8 ' open={open === 2}>
   				     <AccordionHeader className='border-none text-sm backdrop-shadow-lg md:text-base lg:text-base xl:text-lg w-full h-full bg-[#72bf44] px-1 md:px-2 lg:px-4 xl:px-6 text-white drop-shadow-lg font-normal capitalize shadow-md' onClick={() => handleOpen(2)}>
						Integrated studies between Islam  science Complete degree in science disciplines
   				     </AccordionHeader>
   				     <AccordionBody className='border-none bg-opacity-90 text-sm md:text-base lg:text-base xl:text-lg w-full h-full bg-[#72bf44] px-1 md:px-2 lg:px-4 xl:px-6 text-white drop-shadow-lg shadow-md'>
						Integrated studies between Islam  science Complete degree in science disciplines
   				     </AccordionBody>
   				   </Accordion>
   				   <Accordion className='mt-4 lg:mt-8 ' open={open === 3}>
   				     <AccordionHeader className='border-none text-sm backdrop-shadow-lg md:text-base lg:text-base xl:text-lg w-full h-full bg-[#72bf44] px-1 md:px-2 lg:px-4 xl:px-6 text-white drop-shadow-lg font-normal capitalize shadow-md' onClick={() => handleOpen(3)}>
						Integrated studies between Islam  science Complete degree in science disciplines
   				     </AccordionHeader>
   				     <AccordionBody className='border-none bg-opacity-90 text-sm md:text-base lg:text-base xl:text-lg w-full h-full bg-[#72bf44] px-1 md:px-2 lg:px-4 xl:px-6 text-white drop-shadow-lg shadow-md'>
						Integrated studies between Islam  science Complete degree in science disciplines
   				     </AccordionBody>
   				   </Accordion>
   				 </Fragment>
				<div className='mt-12'>
					<h2 className='font-medium text-lg text-[#1c415d] cursor-progress'>Loading features...</h2>
				</div>
			</div>
			</div>
	);
};

export default Library;

