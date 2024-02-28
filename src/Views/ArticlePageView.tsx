import { Box, Heading } from '@chakra-ui/react';
import { Article } from '../types';
import ArticleView from './ArticleView';
import { useParams } from 'react-router-dom';
import SummaryListView from './SummaryListView';
export default function ArticlePageView(props: {
  allArticles: Article[];
}) {
  const params = useParams();
  const index = Number(params.index);
  const article = props.allArticles[index];
  if (article == null) {
    return <>Article missing!</>;
  }
  // console.log('Full List',props.allArticles);
  const authorArticles = props.allArticles.filter((el) => {
    return article.author === el.author
  })

  return (
    <Box background='purple'>
      <ArticleView
        title={article.title}
        author={article.author}
        body={article.body}
      />
      <Heading size='md'>
        Articles authored by {article.author}:
      </Heading>
      <SummaryListView articles={authorArticles} />
    </Box>
  );
}
