import { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
export default function GoodbyeButtonView() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleClick}>Goodbye</Button>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Do not say Goodbye</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Goodbye!</ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
