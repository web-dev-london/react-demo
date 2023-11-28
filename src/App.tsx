import Greeting from './Greeting';
import GreetingList from './GreetingList';
import { Text } from '@chakra-ui/react';

export default function App() {
  return (
    <>
      <GreetingList />
      <Text>Hello World!</Text>
      <Text>Second One</Text>
      <Greeting userName='MUROD' />
      <Greeting userName='David' />
    </>
  );
}
