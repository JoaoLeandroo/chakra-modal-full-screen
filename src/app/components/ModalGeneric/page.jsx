"use client"

import { useState } from 'react'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'

export default function ModalGeneric(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  const tamanho = 'full'

  return (
    <>
      {
        <Button
        onClick={() => handleSizeClick(tamanho)}
        key={size}
        m={4}
        color={'white'}
        // bg="blue.900"
        bg="brand.300"
        borderRadius={"full"}
        h={120}
        >
            Open Modal
        </Button>
      }

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.titulo}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='w-full h-[500px] bg-yellow-400'>
              {
                <iframe 
                className='w-full h-full'
                src="https://www.youtube.com/embed/YC8SLpnxsL4?si=PcNmWbxRRYOoUvUy" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
              }
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}