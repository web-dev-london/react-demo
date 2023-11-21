interface GreetingProps {
  userName: string;
}
export default function Greeting(props: GreetingProps) {
  return (
    <>
      <h1>Hello {props.userName} </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Magnam deleniti molestias ratione quas
        explicabo deserunt debitis tenetur, perspiciatis
        autem aliquid, optio rem repudiandae asperiores,
        illo ab architecto animi recusandae expedita.
        Quaerat fugiat dicta, nobis iure, quae inventore
        aut, similique corporis amet molestias magnam
        placeat autem tempore libero necessitatibus ex.
        Repudiandae harum nam molestias, nostrum quo ipsam
        in debitis officiis fuga.
      </p>
    </>
  );
}
