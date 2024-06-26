import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log("Log Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <NavLink to="/">
        <li className="text-[#706f6f] text-lg">Home</li>
      </NavLink>
      <NavLink to="/about">
        <li className="text-[#706f6f] text-lg">About</li>
      </NavLink>
      <NavLink to="/career">
        <li className="text-[#706f6f] text-lg">Career</li>
      </NavLink>
      <NavLink to="/login">
        <li className="text-[#706f6f] text-lg">Login</li>
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow space-x-4 bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          {user ? (
            <button
              onClick={handleLogOut}
              className="bg-[#403f3f] px-8 py-2 text-white font-semibold"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-[#403f3f] px-8 py-2 text-white font-semibold">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
