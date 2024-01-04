import Owner from './Owner';
import {
  Heading,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';

interface GreetingProps {
  userName: string;
}
export default function Greeting(props: GreetingProps) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  const btn = (
    <Button onClick={handleClick}>
      Click me {props.userName}
    </Button>
  );
  return (
    <>
      <Heading background='green'>
        Hello {props.userName} {btn}{' '}
      </Heading>
      <Owner user={props.userName} />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Magnam deleniti molestias ratione quas
        explicabo deserunt debitis tenetur, perspiciatis
        autem aliquid, optio rem repudiandae asperiores,
        illo ab architecto animi recusandae expedita.
        Quaerat fugiat dicta, nobis iure, quae inventore
        aut, similique corporis amet molestias magnam
        placeat autem tempore libero necessitatibus ex.
        Repudiandae harum nam molestias, nostrum quo ipsam
        in debitis officiis fuga.
      </Text>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.userName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Learnig slowly but Surely</ModalBody>

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
