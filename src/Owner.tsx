import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
interface OwnerProps {
  user: string;
}

export default function Owner(props: OwnerProps) {
  if (props.user.toLowerCase() === 'murod') {
    return (
      <Alert status='success'>
        <AlertIcon />
        <AlertTitle>Owner!</AlertTitle>
        <AlertDescription>
          You own this app.
        </AlertDescription>
      </Alert>
    );
  } else {
    return <></>;
  }
}
