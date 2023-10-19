import React from 'react'
import { motion } from 'framer-motion'
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalContent,
} from '@chakra-ui/react'

function PhotosItem(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
      className='w-full h-full drop-shadow-md ' key={props.id}
    >
      <img onClick={onOpen} className='w-full rounded-lg h-full  object-cover' src={props.img} alt="" />
      <Modal onClose={onClose} size={'xl'} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><h2 className='text-[#1c415d] '>Picture</h2></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img className='w-full h-full py-5 rounded-lg' src={props.img} alt="bg-round" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </motion.div>
  )
}

export default PhotosItem
