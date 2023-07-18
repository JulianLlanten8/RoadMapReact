import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/login">login</Link>
    </>
  );
};
