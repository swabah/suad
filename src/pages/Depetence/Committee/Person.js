import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalContent,
} from '@chakra-ui/react'

function Person(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div onClick={onOpen} className='w-full h-44 md:w-44 md:h-52 hover:shadow-lg rounded-md flex flex-col px-2 py-4 md:px-5 md:py-7 border justify-between items-center text-center'>
        <img className='rounded-full object-cover h-20 w-20 drop-shadow-lg' src={props.img} alt="" />
        <div className='space-y-2  '>
          <h2 className='uppercase text-xs md:text-sm leading-4'>{props.person}</h2>
          <h2 className='uppercase font-medium text-xs textgit status-[#72bf44] font-semibold drop-shadow-sm tracking-wide'>{props.level}</h2>
        </div>
      </div>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><h2 className='text-[#1c415d] '>{props.head}</h2></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='py-5 flex flex-col items-start w-full h-full'>
              <img alt="Home" src={props.img} className="w-full md:h-full rounded-md drop-shadow-md object-cover" />
              <h2 className="capitalize py-4 font-semibold text-lg md:text-xl ">{props.person}</h2>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Person
