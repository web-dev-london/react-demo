import Greeting from './Greeting';
import GreetingList from './GreetingList';

export default function App() {
  return (
    <>
      <GreetingList />
      <div>Hello World!</div>
      <div>Second One</div>
      <Greeting userName='MUROD' />
      <Greeting userName='David' />
    </>
  );
}
