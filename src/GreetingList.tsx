export default function GreetingList() {
  const names = ['A', 'B', 'C'];

  const nameViews = names.map((name, index) => {
    console.log('Name', name);
    return (
      <div>
        Hello {name} {index}
      </div>
    );
  });
  console.log('NameViews', nameViews);
  return <>{nameViews}</>;
}
