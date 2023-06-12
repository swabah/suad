import { EventData } from '../data/EventlistData'
import { useNavigate, useParams } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import bground from '../pages/img/bg-round.svg'

const Eventmodal = ({ onClose, onRequest ,closePath }) => {
    const { id } = useParams();
    const navigate = useNavigate()

  return (
		<div
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
            <div initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
            className='flex flex-col items-center justify-center h-full w-full'>
            	<div className="modal-wrapper flex items-center z-30">
            		<div className="relative modal max-w-md mx-5 xl:max-w-2xl lg:max-w-xl md:max-w-xl backdrop-blure-lg bg-white bg-opacity-90 max-h-screen shadow-lg flex-row rounded-md relative">
            			<div className="modal-header flex justify-between gap-10 p-4 md:p-5 border-b border-gray-200">
                            <h2 className="text-lg lg:text-xl font-medium pt-2 text-[#1c415d] uppercase">{EventData[id - 1].head}</h2>
            				<button
            					onClick={onClose}
            					className="md:px-4 font-bold text-primary-dark dark:text-primary-light"
            				>
            					<FiX className="text-3xl" onClick={()=>navigate(closePath)} />
            				</button>
            			</div>
                         <div className='modal-body p-4 space-y-3 md:space-y-0 md:p-5 md:space-x-5 flex flex-col md:flex-row items-start w-full h-full overflow-hidden'>
                             <img alt="Home" src={EventData[id - 1].imgE}  className="w-full md:w-1/3 md:h-full drop-shadow-md object-cover" />
                             <div className="w-full h-full flex items-start">
                                 <div>
                                   <h2 className="select-none font-normal text-sm md:text-lg ">{EventData[id - 1].para}</h2>
                                   {/* <a href={EventData[id - 1].link} className="font-medium text-xs text-blue-700 mt-0.5 underline underline-offset-1">Read more</a> */}
                                 </div>
                             </div>
                         </div>
                         <img className='absolute right-0 top-0 w-44 -z-10' src={bground} alt="bg-round" />
                    </div>
                </div>
             </div>
		</div>
	);
};

export default Eventmodal;
