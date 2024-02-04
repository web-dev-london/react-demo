import { StringRecord } from './AuthorRoleView';
const record: StringRecord = {
  x: '1',
  y: '2',
};
export default function ExampleView(props: {
  name: string;
}) {
  const value = record[props.name];
  return <>Example {value}</>;
}
