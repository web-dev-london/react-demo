interface OwnerProps {
  user: string;
}

export default function Owner(props: OwnerProps) {
  if (props.user.toLowerCase() === 'murod') {
    return <div>Owner!</div>;
  } else {
    return <></>;
  }
}
