import { HStack, Heading } from '@chakra-ui/react';
import BlogFormView from './BlogFormView';
import ArticleListView from './ArticleListView';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Clink from 'clink-react';
import BlogHomeView from './BlogHomeView';
import ArticlePageView from './ArticlePageView';

const initialArticles = [
  {
    title: 'Javascript is Fun',
    author: 'Murod',
    body: 'Beacause Javascript is Dynamic',
    id: 2,
  },
  {
    title: 'Typescript is valuable',
    author: 'David',
    body: 'In the Future most jobs will use Typescript!',
    id: 1,
  },
  {
    title: 'React JS is Popular',
    author: 'David',
    body: 'In the Future most jobs will use Typescript!',
    id: 0,
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
        id: current.length,
      };
      const newArticles = [...current, newArticle];
      return newArticles;
    });
  }
  return (
    <>
      <HStack>
        <Clink to='/'>
          <Heading>Blog</Heading>
        </Clink>
        <Clink to='/form'>Form</Clink>
        <Clink to='/list'>List</Clink>
        <Clink to='/article/3'>Article3</Clink>
        <Clink to='/article/1'>Article1</Clink>
        <Clink to='http://google.com'>Google</Clink>
      </HStack>
      <Routes>
        <Route
          path='/article/:index'
          element={
            <ArticlePageView allArticles={articles} />
          }
        />
        <Route
          path='/'
          element={
            <BlogHomeView
              createArticle={createArticle}
              articles={articles}
            />
          }
        />
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
