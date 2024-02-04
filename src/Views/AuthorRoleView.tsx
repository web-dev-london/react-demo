import ExampleView from './ExampleView';

export type StringRecord = Record<string, string>;
const roles: StringRecord = {
  Murod: 'Owner',
  David: 'Teacher',
};

export default function AuthorRoleView(props: {
  author: string;
}) {
  const role = roles[props.author];
  if (role != null)
    return (
      <>
        {role}
        <ExampleView name='x' />
      </>
    );
  return <>Unknow User</>;
}
