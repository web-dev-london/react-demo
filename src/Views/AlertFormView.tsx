import { Input, Button, Alert } from '@chakra-ui/react';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function AlertFormView() {
  const [submissions, setSubmissions] = useState([
    'start',
    'stop',
  ]);
  const [previousValue, setPreviousValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const submissionViews = submissions.map(
    (submission, index) => {
      return <Alert key={index}>{submission}</Alert>;
    },
  );
  function handleChange(
    e: ChangeEvent<HTMLInputElement>,
  ) {
    setInputValue(e.target.value);
  }
  function reset() {
    setInputValue('');
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPreviousValue(inputValue);
    setSubmissions((current) => {
      return [...current, inputValue];
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={inputValue}
          placeholder='AlertForm'
        />
        <Button onClick={reset}>Reset</Button>
        <Button type='submit'>Submit</Button>
      </form>
      <Alert>PreviousValue: {previousValue}</Alert>
      {submissionViews}
    </>
  );
}
