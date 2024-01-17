import { ChangeEvent, FormEvent, useState } from 'react';
import {
  Alert,
  Badge,
  Button,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const roles: Record<string, string | undefined> = {
  Murod: 'owner',
  David: 'teacher',
};

export default function ModifyNameView() {
  const [listOfNames, setListOfNames] = useState<
    string[]
  >([]);
  const [name, setName] = useState('');
  const [previousName, setPreviousName] =
    useState<string>();
  function handleName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function resetName() {
    setName('');
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPreviousName(name);
    setListOfNames((current) => {
      const newListOfNames = [...current, name];
      return newListOfNames;
    });
  }

  const rows = listOfNames.map((name, index) => {
    const role = roles[name];
    const roleView = role != null && (
      <Badge>{role}</Badge>
    );
    const getFirstCharacter = name[0];
    const lastIndex = name.length - 1;
    const lastCharacter = name.substring(lastIndex);
    const firstCapital = getFirstCharacter.toUpperCase();
    const restLower = name.substring(1).toLowerCase();
    const capitalize = `${firstCapital}${restLower}`;
    return (
      <Tr key={index}>
        <Td>
          {name}
          {roleView}
        </Td>
        <Td>{name.length}</Td>
        <Td>{getFirstCharacter}</Td>
        <Td>{lastCharacter}</Td>
        <Td>{name.toLowerCase()}</Td>
        <Td>{name.toUpperCase()}</Td>
        <Td>{capitalize}</Td>
      </Tr>
    );
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleName}
          value={name}
          placeholder='Modify Name'
        />
        <Button type='submit'>Submit me</Button>
      </form>

      <Button onClick={resetName}>Reset Name</Button>
      <Alert> Last Submission: {previousName}</Alert>
      <Heading>All Submissions</Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Submission</Th>
            <Th>Number of Character</Th>
            <Th>First Character</Th>
            <Th>Last Character</Th>
            <Th>Lower Case</Th>
            <Th>Upper Case</Th>
            <Th>Capitalize</Th>
          </Tr>
        </Thead>
        <Tbody>{rows}</Tbody>
      </Table>
    </>
  );
}
