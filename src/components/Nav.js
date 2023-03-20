import { Fragment, useRef, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import logo from './ahlussuffalogo.png'
import logo1 from './ahlussuffalogo1.png'

import { FaAlignRight, FaChevronCircleDown, FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { menuItems } from '../data/menuItems'


export default function Nav() {
  const [DropdownOpen, setDropdownOpen] = useState(false)

  const [fix, setfix] = useState(false);
   const Changecolor = () =>{
      if (window.scrollY >= 1) {
        setfix(true)
      }else (
        setfix(false)
      ) 
   }
   window.addEventListener('scroll' , Changecolor)

   function classNames(...classes) {
     return classes.filter(Boolean).join(' ')
    }
  
  return (
    <header>
      <nav className={`flex justify-between items-center ${fix ? 'backdrop-blur-md  bg-opacity-90 text-[#1c415d] shadow-lg transition duration py-3.5 h-16 md:h-20 lg:h-24 bg-white bg-opacity-90' : 'text-[#fff] h-20 md:h-32 py-4.5 bg-transparent'} z-30 fixed top-0  w-full px-4 md:px-7 lg:px-20 `} aria-label="Global">
        <div className="flex lg:flex-1">
          {fix ?
           <Link className='' to='/'>
              <img className='h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 bg-center object-fill drop-shadow-sm' src={logo} alt="Logo" />
           </Link>
           :
           <Link className='' to='/'>
              <img className='h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 bg-center object-fill drop-shadow-sm' src={logo1} alt="Logo" />
           </Link>
           }
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setDropdownOpen(true)} 
          >
            <span className="sr-only">Open main menu</span>
            <FaAlignRight className={`h-6 w-6 ${fix ? 'text-black' : 'text-white'} `} aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex space-x-4 lg:space-x-9">
           <Popover className="relative">
           <Popover.Button className="flex outline-none text-sm lg:text-base uppercase items-center gap-x-1 text-sm   drop-shadow-md hover:text-[#72bf44] font-medium  leading-6">
              <Link to='/'>
                 Home
               </Link>
           </Popover.Button>
            </Popover>
           <Popover 
            className="relative">
                <Popover.Button
                  className={`flex outline-none text-sm lg:text-base uppercase  items-center gap-x-1 text-sm   drop-shadow-md hover:text-[#72bf44] font-medium  leading-6`}>
                    Know'us
                  <FaChevronDown className="h-4 w-4 font-light flex-none text-gray-400" aria-hidden="true" />
                </Popover.Button>

                <Transition
                     as={Fragment}
                     enter="transition ease-out duration-200"
                     enterFrom="opacity-0 translate-y-1"
                     enterTo="opacity-100 translate-y-0"
                     leave="transition ease-in duration-150"
                     leaveFrom="opacity-100 translate-y-0"
                     leaveTo="opacity-0 translate-y-1"
                   >
                  <Popover.Panel
                   className="absolute -left-8 top-full z-10 mt-2 w-[250px] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div 
                      className="py-3 rounded">
                        {menuItems.know.map((item)=>(
                           <Link to={item.url}  onClick={() => setDropdownOpen(false)}>
                               <div  className="text-[#1c415d] decoration-none w-full h-auto hover:bg-gray-200 hover:text-[#72bf44] p-1.5 px-4 drop-shadow-md  lg:px-6 text-sm lg:text-base uppercase relative  font-medium">
                                 <p className='' >{item.name}</p>
                               </div>
                            </Link>
                            ))}
                    </div>
                  </Popover.Panel>
                 </Transition>
            </Popover>
         <Popover className="relative">
           <Popover.Button className="flex outline-none text-sm lg:text-base uppercase  items-center gap-x-1 text-sm  hover:text-[#72bf44]   drop-shadow-md font-medium  leading-6">
              Programmes
             <FaChevronDown className="h-4 w-4 font-light flex-none text-gray-400" aria-hidden="true" />
           </Popover.Button>

           <Transition
             as={Fragment}
             enter="transition ease-out duration-100"
             enterFrom="opacity-0 scale-95"
             enterTo="opacity-100 scale-100"
             leave="transition ease-in duration-75"
             leaveFrom="opacity-100 scale-100"
             leaveTo="opacity-0 scale-95"
           >
             <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[220px] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
               <div className="py-3 rounded">
                {menuItems.Programmes.map((item)=>(
               <Link to={item.url}  onClick={() => setDropdownOpen(false)}>
                   <div  className="text-[#1c415d] decoration-none w-full h-auto hover:bg-gray-200 hover:text-[#72bf44] p-1.5 px-4 drop-shadow-md  lg:px-6 text-sm lg:text-base uppercase relative  font-medium">
                     <p className='' >{item.name}</p>
                   </div>
                </Link>
                ))}
               </div>
             </Popover.Panel>
            </Transition>
            </Popover>
         <Popover className="relative">
           <Popover.Button
            className="flex outline-none text-sm lg:text-base uppercase   items-center gap-x-1 text-sm   drop-shadow-md hover:text-[#72bf44] font-medium  leading-6">
             Resources
            <FaChevronDown className="h-4 w-4 font-light flex-none text-gray-400" aria-hidden="true" />
           </Popover.Button>

           <Transition
             as={Fragment}
             enter="transition ease-out duration-200"
             enterFrom="opacity-0 translate-y-1"
             enterTo="opacity-100 translate-y-0"
             leave="transition ease-in duration-150"
             leaveFrom="opacity-100 translate-y-0"
             leaveTo="opacity-0 translate-y-1"
           >
             <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[170px] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
               <div className="py-3 rounded">
               {menuItems.Resources.map((item)=>(
               <Link to={item.url}  onClick={() => setDropdownOpen(false)}>
                   <div  className="text-[#1c415d] decoration-none w-full h-auto hover:bg-gray-200 hover:text-[#72bf44] p-1.5 px-4 drop-shadow-md  lg:px-6 text-sm lg:text-base uppercase relative  font-medium">
                     <p className='' >{item.name}</p>
                   </div>
                </Link>
                ))}
               </div>
             </Popover.Panel>
            </Transition>
            </Popover>
         <Popover className="relative">
           <Popover.Button className="flex  outline-none text-sm lg:text-base uppercase   items-center gap-x-1 text-sm   drop-shadow-md hover:text-[#72bf44] font-medium  leading-6">
             Reach us
             <FaChevronDown className="h-4 w-4 font-light flex-none text-gray-400" aria-hidden="true" />
           </Popover.Button>

           <Transition
             as={Fragment}
             enter="transition ease-out duration-200"
             enterFrom="opacity-0 translate-y-1"
             enterTo="opacity-100 translate-y-0"
             leave="transition ease-in duration-150"
             leaveFrom="opacity-100 translate-y-0"
             leaveTo="opacity-0 translate-y-1"
           >
             <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-[200px] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
               <div className="py-3 rounded">
                {menuItems.ReachUs.map((item)=>(
               <Link to={item.url}  onClick={() => setDropdownOpen(false)}>
                   <div  className="text-[#1c415d] decoration-none w-full h-auto hover:bg-gray-200 hover:text-[#72bf44] p-1.5 px-4 drop-shadow-md  lg:px-6 text-sm lg:text-base uppercase relative  font-medium">
                     <p className='' >{item.name}</p>
                   </div>
                </Link>
                ))}
               </div>
             </Popover.Panel>
            </Transition>
            </Popover>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden " 
      open={DropdownOpen} 
      onClose={setDropdownOpen}>

        <div
         className="fixed inset-0 z-50 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 backdrop-blur-lg bg-opacity-70">
          <div className="flex items-center justify-between">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">Ahlussuffa Dars</span>
              <img
                className="h-10 w-auto md:hidden"
                src={logo}
                alt=""
              />
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setDropdownOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FaAlignRight className="h-6 w-6 text-[#1c415d]   hover:text-[#72bf44]" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3 ">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full cursor-pointer items-center justify-between  py-2 pl-3 pr-3.5 text-base text-[#1c415d] hover:text-[#72bf44] font-semibold leading-7 hover:bg-gray-200 border-b">
                        Known'us
                        <FaChevronCircleDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none ')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                          <Disclosure.Button
                            as="a"
                            className="block rounded-lg py-1 space-y-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                             {menuItems.know.map((item)=>(
                              <Link to={item.url}  onClick={() => setDropdownOpen(false)}>
                                  <div  className="text-[#1c415d] decoration-none w-full h-auto hover:text-[#72bf44] py-1.5 hover:bg-gray-100 px-4  lg:px-6 text-sm lg:text-base uppercase relative  drop-shadow-md font-medium">
                                  <p className='' >{item.name}</p>
                                </div>
                               </Link>
                               ))}
                          </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between  py-2 pl-3 pr-3.5 text-base text-[#1c415d] hover:text-[#72bf44] font-semibold leading-7 hover:bg-gray-200 border-b">
                        Programmes
                        <FaChevronCircleDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                          <Disclosure.Button
                            as="a"
                            className="block rounded-lg py-1 space-y-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {menuItems.Programmes.map((item)=>(
                            <Link to={item.url}  onClick={() => setDropdownOpen(false)}>
                                <div  className="text-[#1c415d] decoration-none w-full h-auto hover:text-[#72bf44] py-1.5 hover:bg-gray-100 px-4  lg:px-6 text-sm lg:text-base uppercase relative  drop-shadow-md font-medium">
                                <p className='' >{item.name}</p>
                              </div>
                             </Link>
                             ))}
                          </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between  py-2 pl-3 pr-3.5 text-base text-[#1c415d] hover:text-[#72bf44] font-semibold leading-7 hover:bg-gray-200 border-b">
                         Resources
                        <FaChevronCircleDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                          <Disclosure.Button
                            as="a"
                            className="block rounded-lg py-1 space-y-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {menuItems.Resources.map((item)=>(
                              <Link to={item.url}  onClick={() => setDropdownOpen(false)}>
                                  <div  className="text-[#1c415d] decoration-none w-full h-auto hover:text-[#72bf44] py-1.5 hover:bg-gray-100 px-4  lg:px-6 text-sm lg:text-base uppercase relative  drop-shadow-md font-medium">
                                  <p className='' >{item.name}</p>
                                </div>
                               </Link>
                               ))}
                          </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between  py-2 pl-3 pr-3.5 text-base text-[#1c415d] hover:text-[#72bf44] font-semibold leading-7 hover:bg-gray-200 border-b">
                        Reach Us
                        <FaChevronCircleDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none ')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                          <Disclosure.Button
                            as="a"
                            className="block rounded-lg py-1 space-y-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {menuItems.ReachUs.map((item)=>(
                              <Link to={item.url}  onClick={() => setDropdownOpen(false)}>
                                  <div  className="text-[#1c415d] decoration-none w-full h-auto hover:text-[#72bf44] py-1.5 hover:bg-gray-100 px-4  lg:px-6 text-sm lg:text-base uppercase relative  drop-shadow-md font-medium">
                                  <p className='' >{item.name}</p>
                                </div>
                               </Link>
                               ))}
                          </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

