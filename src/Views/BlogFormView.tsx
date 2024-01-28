import {
  Button,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useState } from 'react';
const initialArticles = [
  {
    title: 'Javascript is Fun',
    author: 'Murod',
    body: 'Beacause Javascript is Dynamic',
  },
  {
    title: 'Typescript is valuable',
    author: 'David',
    body: 'In the Future most jobs will use Typescript!',
  },
];

export default function BlogFormView() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [articles, setArticles] = useState(
    initialArticles,
  );

  const articlesViews = articles.map((article, index) => {
    return (
      <>
        <Heading size='lg'>{article.title}</Heading>
        <Heading size='md'>{article.author}</Heading>
        <Text>{article.body}</Text>
      </>
    );
  });

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
    <>
      <Heading>Blog Form</Heading>
      <form>
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
      {articlesViews}
    </>
  );
}
