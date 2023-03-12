import { useState, createContext } from 'react';
import { BooksData } from '../data/BooksData';
// import includes from 'array-includes'

// Create Books context
export const BooksContext = createContext();

// Create the Books context provider
export const BooksProvider = (props) => {
	const [Books, setBooks] = useState(BooksData);
	const [searchBook, setSearchBook] = useState('');
	const [selectBook, setSelectBook] = useState('');

	// Search Books by Book title
	const searchBooksByTitle = Books.filter((item) => {
		const result = item.name
		    .toLowerCase()
			.includes(searchBook.toLowerCase())
			? item
			: searchBook === ''
			? item
			: '';
		return result;
	});

	// Select Books by Book category
	const selectBooksByCategory = Books.filter((item) => {
		let category =
			item.Catagary.charAt(0).toUpperCase() + item.Catagary.slice(1);
		return category.includes(selectBook);
	});

	return (
		<BooksContext.Provider
			value={{
				Books,
				setBooks,
				searchBook,
				setSearchBook,
				searchBooksByTitle,
				selectBook,
				setSelectBook,
				selectBooksByCategory,
			}}
		>
			{props.children}
		</BooksContext.Provider>
	);
};
