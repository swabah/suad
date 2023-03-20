
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
			<div className='px-2 md:px-7 lg:px-20   mt-12  mb-12'>
				<div className='w-full  flex flex-col items-start select-none '>
        		  	<h2  className='text-base md:text-xl uppercase p-1 shadow-sm w-auto h-auto flex items-center px-5 rounded border bg-[#72bf44] font-medium drop-shadow-lg text-white backdrop-shadow-xl '>
        		  	   <span className='uppercase '>Baithul Hikma</span> 
        		  	</h2>
        		</div>
				<div className='relative shadow-lg flex flex-col lg:flex-row items-start  w-full justify-between mt-3 md:mt-8 '>
					<img className=' inner-shadow-md w-full w-full h-[300px] lg:h-[400px] object-cover bg-top rounded   mt-5 lg:mt-0 ' src={library} alt="" />
					<div className='absolute top-0   bg-gradient-to-b from-[#000000e8] to-transparent h-full w-full inner-shadow-md rounded-t'></div>
					<span className='absolute top-0 p-1.5 md:p-5 z-10 text-xs  md:text-base text-[#ffff] drop-shadow-xl shadow-black tracking-wide capitalize whitespace-normal '>Exhibiting as unrivalled knowledge centre 'Baitul Hikma Library' is the main attraction of Ahlussufa Dars.  contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities. It is equipped with advanced systems such as air-conditioning and tele-casting to provide a better learning experience for the students.  Periodicals, student-run magazines, and journal articles are also available here.</span>	
				</div>
				<Fragment >
   				   <Accordion className='mt-7 ' open={open === 1}>
   				     <AccordionHeader onClick={() => handleOpen(1)}>
						Integrated studies between Islam  science Complete degree in science disciplines
   				     </AccordionHeader>
   				     <AccordionBody>
						Integrated studies between Islam  science Complete degree in science disciplines
   				     </AccordionBody>
   				   </Accordion>
   				   <Accordion className='mt-7 ' open={open === 2}>
   				     <AccordionHeader onClick={() => handleOpen(2)}>
						Integrated studies between Islam  science Complete degree in science disciplines
   				     </AccordionHeader>
   				     <AccordionBody>
						Integrated studies between Islam  science Complete degree in science disciplines
   				     </AccordionBody>
   				   </Accordion>
   				   <Accordion className='mt-7 ' open={open === 3}>
   				     <AccordionHeader onClick={() => handleOpen(3)}>
						Integrated studies between Islam  science Complete degree in science disciplines
   				     </AccordionHeader>
   				     <AccordionBody>
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

