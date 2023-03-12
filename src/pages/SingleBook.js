import BookGallery from './Depetence/Library/BookGallery';
import BookInfo from './Depetence/Library/BookInfo';
import { SingleBookProvider } from '../Context/SingleBookContext';
import { FiX } from 'react-icons/fi';
import SubHeadings from '../components/SubHeadings';

const SingleBook = ({ onClose, onRequest }) => {
	return (
		<div className='  mt-[60px] md:mt-[77px] lg:mt-[90px]'>
			<SubHeadings subheading='Single Book'/>
		<div className="font-general-medium fixed inset-0 z-30 transition-all duration-500  ">
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>
			<div className='flex flex-col items-center justify-center h-full w-full'>
				<div className='modal-wrapper flex items-center z-30'>
					<div className='modal w-[300px] md:w-auto backdrop-blur-lg bg-[#1c415d] bg-opacity-100 h-[480px]  shadow-xl flex-row rounded-lg relative'>
		               	<SingleBookProvider>
							<div className='modal-header h-auto relative flex justify-between p-5 border-b-[1px] border-gray-50'>
		               		<BookGallery />
							   <button
								onClick={onClose}
								className="px-4 font-bold absolute top-8 right-5 text-white"
						    	>
								<FiX className="text-3xl" />
							   </button>
							</div>
							<div className="modal-body p-5 w-full h-auto">
		               		<BookInfo />
							</div>
		               	</SingleBookProvider>
					</div>
				</div>
			</div>
			<div className="mt-6 pb-4 sm:pb-1">
				<span
					onClick={onClose}
					type="submit"
					className="px-4
						sm:px-6
						py-2
						sm:py-2.5
						text-white
						bg-indigo-500
						hover:bg-indigo-600
						rounded-md
						focus:ring-1 focus:ring-indigo-900 duration-500"
					aria-label="Submit Request"
				>
					<button>Login Here</button>
				</span>
		   </div>
		</div>
		</div>
	);
};

export default SingleBook;
