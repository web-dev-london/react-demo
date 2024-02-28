import { Heading, Stack} from '@chakra-ui/react';
import { Article } from '../types';
import ArticleListView from './ArticleListView';
import BlogFormView from './BlogFormView';

export default function BlogHomeView(props: {
  articles: Article[];
  createArticle: (props: {
    title: string;
    body: string;
    author: string;
  }) => void;
}) {
  return (
    <Stack padding='10px' background='blue'>
    <Heading size='lg'>Home</Heading>
      <BlogFormView createArticle={props.createArticle} />
      <ArticleListView articles={props.articles} />
    </Stack>
  );
}
