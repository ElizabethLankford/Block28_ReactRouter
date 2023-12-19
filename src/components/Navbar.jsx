import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/red">Red</Link>
      <Link to="/blue">Blue</Link>
    </div>
  );
}
