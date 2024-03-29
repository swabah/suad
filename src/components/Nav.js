import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import logo from './ahlussuffalogo.png'
import logo1 from './ahlussuffalogo1.png'
import { FaAlignRight, FaChevronCircleDown, FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { menuItems } from '../data/menuItems'
import bannarBul from './bannarBul.jpeg'
import './loader-line.css'


export const Nav = () => {
  const [DropdownOpen, setDropdownOpen] = useState(false)

  const [fix, setfix] = useState(false);
  const Changecolor = () => {
    if (window.scrollY >= 1) {
      setfix(true)
    } else (
      setfix(false)
    )
  }
  window.addEventListener('scroll', Changecolor)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <header className={`${fix ? 'backdrop-blur-md  bg-opacity-90 text-[#070307] shadow-lg transition duration  bg-white ' : 'text-[#ffff] bg-transparent'} z-30 fixed top-0  w-full`}>
      {/* <a href='https://suffamehfil2k23.vercel.app/' style={{ backgroundImage: `url(${bannarBul})` }} className={`relative  text-sm md:text-base text-[#ffff] py-2 shadow-sm  backdrop-blur-md  bg-opacity-80 px-6 md:px-7 lg:px-20 w-full flex items-center justify-between `}>
        <div className='absolute inset-0 w-full h-full bg-black opacity-70 -z-10'></div>
        <h2 className='  font-semibold'>Suffa Mehfil 2k23</h2>
        <button class={`relative pl-4 pr-10 py-1  overflow-hidden font-semibold rounded `}>Go App
          <span class=" animate-pulse absolute bg-[#4ea942] text-white top-0 right-1 px-5 pt-3 pb-1 text-xs tracking-wide text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 ">Live</span>
        </button>
      </a>
      <div className='w-full loader-line'></div> */}
      <nav className={` ${fix ? 'py-3.5 ' : ' py-6'}  px-6 md:px-7 lg:px-20 flex justify-between items-center  `} aria-label="Global">
        <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className="flex lg:flex-1">
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
            className="-m-2.5 inline-flex font-light items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setDropdownOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaAlignRight className={`h-6 w-6 ${fix ? 'text-[#070307]' : 'text-[#ffff]'} `} aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex space-x-4 lg:space-x-9">
          <Popover className="relative">
            <Popover.Button className="flex outline-none text-sm lg:text-base uppercase items-center gap-x-1 text-sm   drop-shadow-md hover:text-[#4aa23f] font-medium  leading-6">
              <Link onClick={() => setDropdownOpen(false)} to='/'>
                Home
              </Link>
            </Popover.Button>
          </Popover>
          <Popover
            className="relative">
            <Popover.Button
              className={`flex outline-none text-sm lg:text-base uppercase  items-center gap-x-1 text-sm   drop-shadow-md hover:text-[#4aa23f] font-medium  leading-6`}>
              Know Us
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
                  {menuItems.know.map((item) => (
                    <Link to={item.url} onClick={() => setDropdownOpen(false)} >
                      <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className="decoration-none text-black w-full h-auto hover:bg-gray-200 hover:text-[#4aa23f] p-1.5 px-4 drop-shadow-md  lg:px-6 text-sm lg:text-base uppercase relative  font-medium">
                        <p className='' >{item.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex outline-none text-sm lg:text-base uppercase  items-center gap-x-1 text-sm  hover:text-[#4aa23f]   drop-shadow-md font-medium  leading-6">
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
                  {menuItems.Programmes.map((item) => (
                    <Link to={item.url} onClick={() => setDropdownOpen(false)}>
                      <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className="text-black decoration-none w-full h-auto hover:bg-gray-200 hover:text-[#4aa23f] p-1.5 px-4 drop-shadow-md  lg:px-6 text-sm lg:text-base uppercase relative  font-medium">
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
              className="flex outline-none text-sm lg:text-base uppercase   items-center gap-x-1 text-sm   drop-shadow-md hover:text-[#4aa23f] font-medium  leading-6">
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
                  {menuItems.Resources.map((item) => (
                    <Link to={item.url} onClick={() => setDropdownOpen(false)}>
                      <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className="text-black decoration-none w-full h-auto hover:bg-gray-200 hover:text-[#4aa23f] p-1.5 px-4 drop-shadow-md  lg:px-6 text-sm lg:text-base uppercase relative  font-medium">
                        <p className='' >{item.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex  outline-none text-sm lg:text-base uppercase   items-center gap-x-1 text-sm   drop-shadow-md hover:text-[#4aa23f] font-medium  leading-6">
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
                  {menuItems.ReachUs.map((item) => (
                    <Link to={item.url} onClick={() => setDropdownOpen(false)}>
                      <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className=" text-black decoration-none w-full h-auto hover:bg-gray-200 hover:text-[#4aa23f] p-1.5 px-4 drop-shadow-md  lg:px-6 text-sm lg:text-base uppercase relative  font-medium">
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
            <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className="-m-1.5 p-1.5">
              <span className="sr-only">Ahlussuffa Dars</span>
              <img
                onClick={() => setDropdownOpen(false)}
                className="h-10 w-auto md:hidden"
                src={logo}
                alt=""
              />
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#070307]"
              onClick={() => setDropdownOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FaAlignRight className="h-6 w-6 text-[#070307]   hover:text-[#070307]" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3 ">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full cursor-pointer items-center justify-between  py-2 pl-3 pr-3.5 text-base text-[#070307] hover:text-[#4aa23f] font-semibold leading-7 hover:bg-gray-200 border-b">
                        Known'us
                        <FaChevronCircleDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none ')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        <Disclosure.Button
                          as="a"
                          className="block rounded-lg py-1 space-y-2 text-sm font-semibold leading-7 text-[#070307] hover:bg-gray-50"
                        >
                          {menuItems.know.map((item) => (
                            <Link to={item.url} onClick={() => setDropdownOpen(false)}>
                              <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className="text-[#070307] decoration-none w-full h-auto hover:text-[#4aa23f] py-1.5 hover:bg-gray-100 px-4  lg:px-6 text-sm lg:text-base uppercase relative  drop-shadow-md font-medium">
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
                      <Disclosure.Button className="flex w-full items-center justify-between  py-2 pl-3 pr-3.5 text-base text-[#070307] hover:text-[#4aa23f] font-semibold leading-7 hover:bg-gray-200 border-b">
                        Programmes
                        <FaChevronCircleDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        <Disclosure.Button
                          as="a"
                          className="block rounded-lg py-1 space-y-2 text-sm font-semibold leading-7 text-[#070307] hover:bg-gray-50"
                        >
                          {menuItems.Programmes.map((item) => (
                            <Link to={item.url} onClick={() => setDropdownOpen(false)}>
                              <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className="text-[#070307] decoration-none w-full h-auto hover:text-[#4aa23f] py-1.5 hover:bg-gray-100 px-4  lg:px-6 text-sm lg:text-base uppercase relative  drop-shadow-md font-medium">
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
                      <Disclosure.Button className="flex w-full items-center justify-between  py-2 pl-3 pr-3.5 text-base text-[#070307] hover:text-[#4aa23f] font-semibold leading-7 hover:bg-gray-200 border-b">
                        Resources
                        <FaChevronCircleDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        <Disclosure.Button
                          as="a"
                          className="block rounded-lg py-1 space-y-2 text-sm font-semibold leading-7 text-[#070307] hover:bg-gray-50"
                        >
                          {menuItems.Resources.map((item) => (
                            <Link to={item.url} onClick={() => setDropdownOpen(false)}>
                              <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className="text-[#070307] decoration-none w-full h-auto hover:text-[#4aa23f] py-1.5 hover:bg-gray-100 px-4  lg:px-6 text-sm lg:text-base uppercase relative  drop-shadow-md font-medium">
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
                      <Disclosure.Button className="flex w-full items-center justify-between  py-2 pl-3 pr-3.5 text-base text-[#070307] hover:text-[#4aa23f] font-semibold leading-7 hover:bg-gray-200 border-b">
                        Reach Us
                        <FaChevronCircleDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none ')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        <Disclosure.Button
                          as="a"
                          className="block rounded-lg py-1 space-y-2 text-sm font-semibold leading-7 text-[#070307] hover:bg-gray-50"
                        >
                          {menuItems.ReachUs.map((item) => (
                            <Link to={item.url} onClick={() => setDropdownOpen(false)}>
                              <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} className="text-[#070307] decoration-none w-full h-auto hover:text-[#4aa23f] py-1.5 hover:bg-gray-100 px-4  lg:px-6 text-sm lg:text-base uppercase relative  drop-shadow-md font-medium">
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

