import { CSSProperties } from 'react';
export default function GreetingList() {
  const names = [
    'David Young Stephenson',
    'Murod Akhmedov Olimovich',
    'C',
  ];
  const tableStyle: CSSProperties = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    backgroundColor: 'red',
  };
  const nameViews = names.map((name, index) => {
    console.log('Name', name);
    const tdStyle = {
      backgroundColor: 'blue',
      ...tableStyle,
      padding: '10px',
    };
    return (
      <tr>
        <td style={tdStyle}>Hello {name}</td>
        <td style={tdStyle}> {index} </td>
      </tr>
    );
  });
  console.log('NameViews', nameViews);

  return <table style={tableStyle}>{nameViews}</table>;
}
