import { Heading } from '@chakra-ui/react';
import { Article } from '../types';
import ArticleSummaryView from './ArticleSummaryView';

export default function ArticleListView(props: {
  articles: Article[];
}) {
  console.log('props', props);
  const articleViews = props.articles.map(
    (article, index) => {
      return (
        <ArticleSummaryView
          key={index}
          index={index}
          title={article.title}
          author={article.author}
          // body={article.body}
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
