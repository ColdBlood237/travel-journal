import earth from "../assets/earth.png";

export default function Header() {
  return (
    <nav className="navbar">
      <img src={earth} alt="earth icon" />
      <span>my travel journal</span>
    </nav>
  );
}
