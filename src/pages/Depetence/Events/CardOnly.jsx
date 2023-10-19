import React from 'react'
import bground from '../../../pages/img/bg-round.svg'
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalContent,
} from '@chakra-ui/react'

function CardOnly({ events }) {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      <div onClick={onOpen} className="relative cursor-pointer block rounded-lg  bg-transparent shadow-indigo-100 w-full h-full">
        <div className='hover:opacity-70 transition-all opacity-0 z-10 rounded-md absolute bottom-0 flex flex-col items-start justify-end p-4 inset-0 w-full h-full bg-gradient-to-t from-black to-transparent'>
            <h2 className=" lg:text-lg font-semibold pt-2 text-[#fff] uppercase">{events.head}</h2>
            <p id='Eventtext' className="text-white select-none text-base  line-clamp-2 pt-1">{events.para}</p>
        </div>
        <img alt="Home" src={events.imgE} className="rounded-md w-full h-full drop-shadow-md object-cover" />
      </div>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><h2 className='text-[#1c415d] '>{events.head}</h2></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-row relative">
              <div className=' flex flex-col items-start w-full h-full'>
                <img alt="Home" src={events.imgE} className="w-full md:h-full rounded-md drop-shadow-md object-cover" />
                <h2 className="py-4 select-none font-normal text-sm md:text-lg ">{events.para}</h2>
              </div>
              <img className='absolute right-0 top-0 w-44 -z-10' src={bground} alt="bg-round" />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CardOnly