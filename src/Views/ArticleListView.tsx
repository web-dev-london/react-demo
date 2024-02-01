import { Heading } from '@chakra-ui/react';
import ArticleView from './ArticleView';

export default function ArticleListView() {
  const articleViews = articles.map((article, index) => {
    return (
      <ArticleView
        key={index}
        title={article.title}
        author={article.author}
        body={article.body}
      />
    );
  });
  return (
    <>
      <Heading size='lg'>Articles</Heading>
      {articleViews}
    </>
  );
}
