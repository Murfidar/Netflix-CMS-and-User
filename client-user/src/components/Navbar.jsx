import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-black">
      <div className="flex-1">
        <Link to="/">
          <a className=" text-4xl text-primary font-bold font-mono mx-12 px-6">
            {" "}
            NETFLIX
          </a>{" "}
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
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
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
