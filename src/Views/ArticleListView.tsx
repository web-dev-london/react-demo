import { Box, Heading } from '@chakra-ui/react';
import { Article } from '../types';
import SummaryListView from './SummaryListView';
export default function ArticleListView(props: {
  articles: Article[];
}) {
  
  return (
    <Box background='yellow'>
      <Heading size='lg'>Articles</Heading>
    <SummaryListView articles={props.articles}/>
    </Box>
  );
}
