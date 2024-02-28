
import { Box } from '@chakra-ui/react';
import { Article } from '../types';
import ArticleSummaryView from './ArticleSummaryView';

const SummaryListView = (props: {
  articles: Article[];
}) => {
  const articleViews = props.articles.map(
    (article, index) => {
      return (
        <ArticleSummaryView
          key={index}
          id={article.id}
          title={article.title}
          author={article.author}
        />
      );
    },
  );
  return (
    <>
      <Box padding='10px' background='tomato' >
        {articleViews}
      </Box>
    </>
  )
}

export default SummaryListView