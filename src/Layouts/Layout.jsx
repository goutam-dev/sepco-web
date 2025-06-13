import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function Layout() {
  return (
    <>
      <Header logoLeft={"/sepco_logo.png"} logoRight={"/mop.png"} />
      <Outlet />
    </>
  );
}

export default Layout;
