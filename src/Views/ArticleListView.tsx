import { Heading } from '@chakra-ui/react';
import ArticleView from './ArticleView';
import { Article } from '../types';

export default function ArticleListView(props: {
  articles: string[];
}) {
  console.log('props', props);
  const articleViews = props.articles.map(
    (article, index) => {
      return (
        <ArticleView
          key={index}
          title={article.title}
          author={article.author}
          body={article.body}
        />
      );
    },
  );
  return (
    <>
      <Heading size='lg'>Articles</Heading>
      {articleViews}
    </>
  );
}
