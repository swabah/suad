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

function Asathidacard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div key={props.id} className=' h-full w-full  xl:h-72 bg-white flex items-center justify-center'>
      <div onClick={onOpen} className="group drop-shadow-lg relative block h-full w-full rounded-lg">
        <span className="absolute inset-0 border-2 border-dashed border-black rounded-lg"></span>
        <div className="relative flex h-full transform items-end bg-white rounded-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2" >
          <div className="transition-opacity  w-full h-full group-hover:absolute group-hover:opacity-0">
            <img className='w-full h-full object-cover rounded-lg' src={props.img} alt="" />
          </div>
          <div className="absolute opacity-0 bg-opacity-0 bg-black w-full h-full drop-shadow-xl  transition-opacity group-hover:relative group-hover:opacity-100" >
            <img className='w-full h-full object-cover brightness-50 rounded-lg' src={props.img} alt="" />
            <h3 className="absolute top-0 p-5 w-full flex flex-col bg-gradient-to-b rounded-t-lg from-[#1a1a1a] via-opacity-90 to-opacity-80 items-center text-center rounded-b-lg text-white font-bold  text-xl font-medium">{props.name}</h3>
          </div>
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
                <h2 className="capitalize  py-4 font-semibold text-lg md:text-xl ">{props.name}</h2>
              </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Asathidacard
