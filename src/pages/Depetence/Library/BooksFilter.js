const selectOptions = [
	'navel',
	'Ilamic',
	'Stoires',
];

const BooksFilter = ({ setSelectBook }) => {
	return (
		<select
		onChange={(e) => {
			setSelectBook(e.target.value);
		}}
		class="appearance-none h-full rounded-l border  block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
		   <option value={setSelectBook} className="text-sm sm:text-md">
				All Books
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
	  </select>
	);
};

export default BooksFilter;
