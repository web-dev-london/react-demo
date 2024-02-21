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
    <>
      <BlogFormView createArticle={props.createArticle} />
      <ArticleListView articles={props.articles} />
    </>
  );
}
