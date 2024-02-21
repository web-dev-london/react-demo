import { Heading } from '@chakra-ui/react';
import { Article } from '../types';
import ArticleView from './ArticleView';
import { useParams } from 'react-router-dom';
import ArticleSummaryView from './ArticleSummaryView';
export default function ArticlePageView(props: {
  listArticle: Article[];
}) {
  const params = useParams();
  const index = Number(params.index);
  const article = props.listArticle[index];
  if (article == null) {
    return <>Article missing!</>;
  }
  console.log('Full List',props.listArticle);
  const subsetOfArticle = props.listArticle.filter((el) =>{
      return article.author === el.author
  })
  console.log('Subset of Article',subsetOfArticle);
  const subsetOfArticleViews = subsetOfArticle.map((article, index) =>{
    return (
      <ArticleSummaryView
      key={index}
      index={index}
      title={article.title}
      author={article.author}
      />
    )
  })
  return (
    <>
      <ArticleView
        title={article.title}
        author={article.author}
        body={article.body}
      />
      <Heading size='md'>
      Articles authored by {article.author}:
      </Heading>
      {subsetOfArticleViews}
    </>
  );
}
