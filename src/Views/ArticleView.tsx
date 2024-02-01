import { Heading, Text } from '@chakra-ui/react';
import AuthorRoleView from './AuthorRoleView';

export default function ArticleView(props: {
  title: string;
  author: string;
  body: string;
}) {
  return (
    <>
      <Heading size='md'>{props.title}</Heading>
      <Heading size='sm'>
        {props.author}{' '}
        <AuthorRoleView author={props.author} />
      </Heading>
      <Text>{props.body}</Text>
    </>
  );
}
