import { Link } from "react-router-dom";

export default function Navbar() {
  function logout() {
    console.log("masuk");
    localStorage.clear();
  }

  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">
                <a>Movie</a>
              </Link>
            </li>
            <li>
              <Link to="/genres">
                <a>Genre</a>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <a>Register a New Admin</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost normal-case text-xl text-primary font-mono font-bold">Admin Console</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-bold font-mono">
          <li>
            <Link to="/">
              <a>Movie</a>
            </Link>
          </li>
          <li>
            <Link to="/genres">
              <a>Genre</a>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <a>Register a New Admin</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.vectorstock.com%2Fi%2F1000x1000%2F23%2F70%2Fman-avatar-icon-flat-vector-19152370.jpg&f=1&nofb=1&ipt=9fa9f052aafe465ac7f7ec5400cc559bab9e65e3b5e67c8d105c0cdf9a3bf498&ipo=images" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link to="/login" onClick={logout}>
                {" "}
                <a>Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
