import { useContext } from 'react';
import SingleBookContext from '../../../Context/SingleBookContext';

const BookInfo = () => {
	const { singleBookData } = useContext(SingleBookContext);

	return (
		<div className="block sm:flex ">
			<div className="w-full  text-left">
				{/* Single Book client details */}
				<div className="text-white">
					<p className=" text-2xl font-semibold  mb-2">
						{singleBookData.BookInfo.ClientHeading}
					</p>
					<ul className="">
						{singleBookData.BookInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className=""
										key={info.id}
									>
										<span>{info.title}: </span>
										<a
											href="https://stoman.me"
											className={
												info.title === 'Website' ||
												info.title === 'Phone'
													? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
													: ''
											}
											aria-label="Book Website and Phone"
										>
											{info.details}
										</a>
									</li>
								);
							}
						)}
					</ul>
				</div>
		    </div>
		</div>
	)
};

export default BookInfo;
