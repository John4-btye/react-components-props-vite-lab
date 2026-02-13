import defaultLogo from "../assets/logo";

export default function About({ image = defaultLogo, aboutText = "This is a blog about React." }) {
  return (
    <header>
      <img src={image} alt="blog logo" />
      <p>{aboutText}</p>
    </header>
  );
}
