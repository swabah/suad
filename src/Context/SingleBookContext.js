import { useState, createContext } from 'react';
import { singleBookData as singleBookDataJson } from '../data/singleBookData';

const SingleBookContext = createContext();

export const SingleBookProvider = ({ children }) => {
	const [singleBookData, setSingleBookData] = useState(
		singleBookDataJson
	);

	return (
		<SingleBookContext.Provider
			value={{ singleBookData, setSingleBookData }}
		>
			{children}
		</SingleBookContext.Provider>
	);
};

export default SingleBookContext;
