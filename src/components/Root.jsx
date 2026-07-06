import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />

      <h1>root is here</h1>

      <Outlet />
    </div>
  );
};

export default Root;
