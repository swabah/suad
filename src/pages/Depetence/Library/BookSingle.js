import '../Style.css'
import { motion } from 'framer-motion';
import { useState } from 'react';
import SingleBook from '../../SingleBook';

const BookSingle = (props) => {
    const [showBook, setShowBook] = useState(false);

	function showLoginBook() {
		if (!showBook) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowBook(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowBook(false);
		}
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>

			{/* <Link to="/library/Book-Single" aria-label="Single Book"> */}
                        <div onClick={showLoginBook} id='scrollBook' class="overflow-x-scroll w-full h-auto flex-row md:flex items-center border-t border-gray-200 md:justify-between bg-white flex">
                        <div className='flex h-full md:w-1/4'>
                                <th
                                    class="px-5 md:w-1/2 h-full py-3 md:border-r-2 text-left text-sm font-semibold text-gray-600 uppercasecking-wider capitalize">
                                    {props.Catagary}
                                </th>
                                <th
                                    class="px-5  py-3  text-left text-sm font-semibold text-gray-600 uppercasecking-wider capitalize">
                                     {props.name} 
                                </th>
							</div>
							<div className='w-full justify-evenly flex items-center'>
                            <th
                                class="px-5 w-1/3 py-3  text-left text-sm font-semibold text-gray-600 uppercasecking-wider capitalize">
                                {props.writer}
                            </th>
                            <th
                                class="px-5 py-3  text-left text-sm font-semibold text-gray-600 uppercasecking-wider capitalize">
                                {props.price}
                            </th>
                            <th
                                class="px-5 py-3  text-left text-sm font-semibold text-gray-600 uppercasecking-wider capitalize">
                                {props.status}
                            </th>
							</div>
						</div>
                        <div>
                        {showBook ? (
				        	<SingleBook
					            	onClose={showLoginBook}
					            	onRequest={showLoginBook}
					          />
				            ) : null}
			                {showBook ? showLoginBook : null}
                        </div>

                        {/* </Link> */}
		</motion.div>
	);
};

export default BookSingle;

