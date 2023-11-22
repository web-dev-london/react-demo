export default function GreetingList() {
  let names = ['A', 'B', 'C'];
  let nameViews = names.map((name, index) => {
    console.log('Name', name);
    return (
      <div>
        {name} {index}
      </div>
    );
  });
  console.log('NameViews', nameViews);
  return <>{nameViews}</>;
}
