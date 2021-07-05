import React, { useState } from 'react'
import {useDisclosure, Button} from "@chakra-ui/react";
import ModalWindow from "./features/modalWindow";
// import Button from "@progress/kendo-react-buttons/dist/es/Button";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="App">
      <Button onClick={onOpen} >Open Modal</Button>
    <ModalWindow isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    </div>
  )
}

export default App
