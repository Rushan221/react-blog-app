import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Rushan's Blogs</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create-blog">Create Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
