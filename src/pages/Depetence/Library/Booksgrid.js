import { useContext } from 'react';
import BookSingle from './BookSingle';
import { BooksContext } from '../../../Context/BooksContext';
import BooksFilter from './BooksFilter';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../Style.css'

const BooksGrid = () => {
	const {
		Books,
		searchBook,
		setSearchBook,
		searchBooksByTitle,
		selectBook,
		setSelectBook,
		selectBooksByCategory,
	} = useContext(BooksContext);

	return (
		<section className="py-5 mt-5 sm:py-10 sm:mt-10">
			<div className="text-center">
				<p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light">
					Books portfolio
				</p>
			</div>
			<div className="antialiased text-[#1c415d] w-full  px-2 md:px-7 lg:px-20  mt-12 font-sans bg-white">
            <div className='w-full'>
            <div class="py-8">
                <div>
                    <h2 class="text-2xl font-semibold leading-tight">Book Lists</h2>
                </div>
                <div class="my-2 flex sm:flex-row flex-col">
                    <div class="flex flex-row mb-1 sm:mb-0">
                        
                        <div class="relative">
					     	<BooksFilter setSelectBook={setSelectBook} />
                        </div>
                    </div>
                    <div class="block relative">
                        <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input
						    id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Books name"
							aria-label="Name"
					    	onChange={(e) => {
					    		setSearchBook(e.target.value);
					    	}}
                            class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block w-full border-2 border-gary-200 shadow rounded-lg overflow-hidden ">
                        <div id='scrollBook' class="overflow-x-scroll md:w-full  bg-gray-100 border-b-2 border-gary-200 flex items-center justify-between leading-normal">
							<div className='flex md:w-1/4'>
                                <th
                                    class="px-5 w-1/2 py-3 border-r-2 text-left text-sm font-semibold text-gray-600 uppercasecking-wider">
                                    Catagary
                                </th>
                                <th
                                    class="px-5  py-3  text-left text-sm font-semibold text-gray-600 uppercasecking-wider">
                                     Name
                                </th>
							</div>
							<div className='w-full justify-evenly flex'>
                            <th
                                class="px-5 w-1/3 py-3  text-left text-sm font-semibold text-gray-600 uppercasecking-wider">
                                Writer
                            </th>
                            <th
                                class="px-5 py-3  text-left text-sm font-semibold text-gray-600 uppercasecking-wider">
                                Price
                            </th>
                            <th
                                class="px-5 py-3  text-left text-sm font-semibold text-gray-600 uppercasecking-wider">
                                Status
                            </th>
							</div>
						</div>
						<div>
							{selectBook
					            ? selectBooksByCategory.map((Book) => (
					            		<BookSingle
					            			writer={Book.writer}
											name={Book.name}
											price={Book.price}
											Catagary={Book.Catagary}
											status={Book.status}
											img={Book.img}
					            		/>
					              ))
					            : searchBook
					            ? searchBooksByTitle.map((Book) => (
					            		<BookSingle
										writer={Book.writer}
										name={Book.name}
										Catagary={Book.Catagary}
										price={Book.price}
										status={Book.status}
										img={Book.img}
					            		/>
					              ))
					            : Books.map((Book) => (
					            		<BookSingle
										writer={Book.writer}
										name={Book.name}
										Catagary={Book.Catagary}
										price={Book.price}
										status={Book.status}
										img={Book.img}
					            		/>
					              ))}
							</div>	  
                        <div class="px-5 py-8 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <div className='flex items-center justify-center w-auto h-auto'>
                            <div className='p-3 px-4 bg-gray-200 border rounded-l-lg'><FaChevronLeft/></div>
                               <div className='p-2 px-4 border'>1</div>
                               <div className='p-2 px-4 border'>2</div>
                               <div className='p-2 px-4 border'>3</div>
                               {/* <div className='p-1 px-3 border text-2xl'>+</div> */}
                            <div className='p-3 px-4 bg-gray-200 border rounded-r-lg'><FaChevronRight/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
		</section>
	);
};

export default BooksGrid;
