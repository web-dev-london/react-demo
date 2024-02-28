import { Box, Button, Heading, Input } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function BlogFormView(props: {
  createArticle: (props: {
    title: string;
    author: string;
    body: string;
  }) => void;
}) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  // console.log('Render');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.createArticle({ title, author, body });
  }

  function handleTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  function handleAuthor(
    e: ChangeEvent<HTMLInputElement>,
  ) {
    setAuthor(e.target.value);
  }
  function handleBody(e: ChangeEvent<HTMLInputElement>) {
    setBody(e.target.value);
  }
  function reset() {
    setTitle('');
    setAuthor('');
    setBody('');
  }

  return (
    <Box background='green'>
      <Heading size='lg'>Blog Form</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleTitle}
          value={title}
          placeholder='Title'
        />
        <Input
          onChange={handleAuthor}
          value={author}
          placeholder='Author'
        />
        <Input
          onChange={handleBody}
          value={body}
          placeholder='Body'
        />
        <Button type='submit'>Submit</Button>
      </form>
      <Button onClick={reset}>Reset</Button>
    </Box>
  );
}
