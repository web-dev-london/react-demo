import { Heading } from '@chakra-ui/react';
import BlogFormView from './BlogFormView';
import ArticleListView from './ArticleListView';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

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
export default function BlogView() {
  const [articles, setArticles] = useState(
    initialArticles,
  );

  function createArticle(props: {
    title: string;
    author: string;
    body: string;
  }) {
    setArticles((current) => {
      const newArticle = {
        title: props.title,
        author: props.author,
        body: props.body,
      };
      const newArticles = [...current, newArticle];
      return newArticles;
    });
  }
  return (
    <>
      <Heading>Blog</Heading>
      <Routes>
        <Route
          path='/form'
          element={
            <BlogFormView createArticle={createArticle} />
          }
        />
        <Route
          path='/list'
          element={
            <ArticleListView articles={articles} />
          }
        />
      </Routes>
    </>
  );
}
