import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function Layout() {
  return (
    <>
      <Header logoLeft={"/sepco_logo.png"} title={"/sepco_text.png"} logoRight={"/mop.png"} />
      <Outlet />
    </>
  );
}

export default Layout;
