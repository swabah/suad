import React from 'react'
import { motion } from 'framer-motion'
import '../Style.css'
import { EventData } from '../../../data/EventlistData'
import { useNavigate, useParams } from 'react-router-dom';
import { FiX } from 'react-icons/fi';


function CardOnly({onclose}) {
    const { id } = useParams();
    const navigate = useNavigate()

  return (
    <motion.div initial={{ opacity: 0 }}
	animate={{ opacity: 1, delay: 1 }}
	transition={{
		ease: 'easeInOut',
		duration: 0.7,
		delay: 0.15,
	}} className='flex flex-col items-center justify-center h-full w-full'>
		<div className="modal-wrapper flex items-center z-30">
			<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl backdrop-blure-lg bg-white bg-opacity-90 max-h-screen shadow-lg flex-row rounded-lg relative">
				<div className="modal-header flex justify-between gap-10 p-5 border-b border-gray-200">
					<h5 className=" text-primary-dark dark:text-primary-light text-xl">
						Welcome, Students Login Corner
					</h5>
					<button
						onClick={onclose || navigate('/Event')}
						className="px-4 font-bold text-primary-dark dark:text-primary-light"
					>
						<FiX className="text-3xl" />
					</button>
				</div>
                <div className='modal-body p-5 w-full h-full'>
                    <img alt="Home" src={EventData[id - 1].imgE}  className="w-full h-96 drop-shadow-md p-5 object-cover" />
                    <div className="mt-1 lg:mt-2 w-full h-full flex flex-col items-start p-5">
                        <div>
                          <h2 className="text-lg lg:text-xl font-medium pt-2 text-[#1c415d] uppercase">{EventData[id - 1].head}</h2>
                        </div>
                        <div>
                          <h2 className="select-none py-0.5 lg:py-2 lg:py-0 lg:pb-2 xl:py-2 mt-0.5 lg:mt-1.5 font-normal text-lg ">{EventData[id - 1].para}</h2>
                          {/* <a href={EventData[id - 1].link} className="font-medium text-xs text-blue-700 mt-0.5 underline underline-offset-1">Read more</a> */}
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </motion.div>
  )
}

export default CardOnly