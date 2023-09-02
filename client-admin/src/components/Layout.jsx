import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
    <div className="bg-neutral-900">
      <Navbar />
      <Outlet />
    </div>
    </>
  );
}
