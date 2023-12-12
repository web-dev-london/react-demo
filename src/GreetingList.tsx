import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { ClickButtonView } from './Views/ClickButtonView';
export default function GreetingList() {
  const names = [
    'David Young Stephenson',
    'Murod Akhmedov Olimovich',
    'C',
    'Murod Akhmedov Olimovich',
  ];

  const nameViews = names.map((name, index) => {
    return (
      <Tr key={index}>
        <Td>Hello {name}</Td>
        <Td> {index} </Td>
      </Tr>
    );
  });

  return (
    <>
      <ClickButtonView />
      <TableContainer>
        <Table
          size='sm'
          variant='striped'
          colorScheme='red'
        >
          <TableCaption>List of Greeting!</TableCaption>
          <Thead>
            <Tr>
              <Th>Greeting</Th>
              <Th>Index</Th>
            </Tr>
          </Thead>
          <Tbody>{nameViews}</Tbody>
          <Tfoot>
            <Tr>
              <Th>Greeting</Th>
              <Th>Index</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
