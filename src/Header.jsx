import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">SILLA NACIONAL</Link>
      <Link to="/yo">YO</Link>
      <Link to="/chamba">CHAMBA</Link>
    </div>
  );
}

export default Header;
