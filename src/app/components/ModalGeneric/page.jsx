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
  background,
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
        background={'blue.900'}
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
            {props.conteudo}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}