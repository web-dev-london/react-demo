import {
  Button,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import {
  ChangeEvent,
  FormEvent,
  Fragment,
  useState,
} from 'react';
import AuthorRoleView from './AuthorRoleView';
import ArticleView from './ArticleView';
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
  // console.log('Render');
  const articlesViews = articles.map((article, index) => {
    return (
      <ArticleView
        key={index}
        title={article.title}
        author={article.author}
        body={article.body}
      />
    );
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setArticles((current) => {
      const newArticle = {
        title: title,
        author: author,
        body: body,
      };
      const newArticles = [...current, newArticle];
      return newArticles;
    });
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
    <>
      <Heading>Blog Form</Heading>
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
      {articlesViews}
    </>
  );
}
