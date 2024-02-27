import { Heading, Badge } from '@chakra-ui/react';
import Clink from 'clink-react';

export default function ArticleSummaryView(props: {
  title: string;
  author: string;
  id: number;
}) {
  
  return (
    <>
      <Clink to={`/article/${props.id}`}>
        <Heading size='sm'>
          {props.title} <Badge>{props.author}</Badge> [
          {props.id}]
        </Heading>
      </Clink>
    </>
  );
}
