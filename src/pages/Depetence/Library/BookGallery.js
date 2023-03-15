import { useContext } from 'react';
import SingleBookContext from '../../../Context/SingleBookContext';

const BookGallery = ({onClose}) => {
	const { singleBookData } = useContext(SingleBookContext);

	return (
		<div className="h-auto w-96">
			{singleBookData.BookImages.map((Book) => {
				return (
					<div className="relative" key={Book.id}>
						<img
							src={Book.img}
							className="rounded-xl w-full h-82 cursor-pointer shadow-lg sm:shadow-none"
							alt={Book.title}
							key={Book.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default BookGallery;
