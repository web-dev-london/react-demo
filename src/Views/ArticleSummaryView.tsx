import { Heading, Badge } from '@chakra-ui/react';
import Clink from 'clink-react';

export default function ArticleSummaryView(props: {
  title: string;
  author: string;
  index: number;
}) {
  
  return (
    <>
      <Clink to={`/article/${props.index}`}>
        <Heading size='md'>
          {props.title} <Badge>{props.author}</Badge> [
          {props.index}]
        </Heading>
      </Clink>
    </>
  );
}
