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
// let count = 0;
export function ClickButtonView() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  console.log('Open', open);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  console.log('Count', count);
  function handleClick() {
    console.log('click');
    console.log('before', count);
    // count++;
    setCount((current) => {
      console.log('Current', current);
      const newCount = current + 1;
      console.log('NewCount', newCount);
      return newCount;
    });
    console.log('after', count);
    handleOpen();
  }
  return (
    <>
      <Button onClick={handleClick}>Click {count}</Button>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>hello</ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              onClick={handleClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
