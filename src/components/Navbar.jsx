import { Link, NavLink } from "react-router";

const Navbar = () => {
  const menuItems = (
    <nav className=" flex gap-4 text-xl text-green-200 font-bold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="gellary">Gellary</NavLink>
      <NavLink to="plantation">Plantation</NavLink>
    </nav>
  );

  return (
    <div className="">
      <div className="navbar bg-green-700 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Link to="/">
              Green <span className="text-green-300">Land</span>
            </Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn capitalize bg-amber-400 text-black font-semibold text-lg">
            <Link to="about">plant a tree</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
