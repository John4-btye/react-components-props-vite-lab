export default function Header({ name = "My Blog" }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}
