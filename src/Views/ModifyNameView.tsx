import { ChangeEvent, FormEvent, useState } from 'react';
import { Alert, Button, Input } from '@chakra-ui/react';

export default function ModifyNameView() {
  const [name, setName] = useState('');
  const [previousName, setPreviousName] =
    useState<string>();
  function handleName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function resetName() {
    setName('');
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPreviousName(name);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleName}
          value={name}
          placeholder='Modify Name'
        />
        <Button type='submit'>Submit me</Button>
      </form>

      <Button onClick={resetName}>Reset Name</Button>
      <Alert>{previousName}</Alert>
    </>
  );
}
