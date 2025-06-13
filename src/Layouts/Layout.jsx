import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Layout() {
  return (
    <>
      <Header logoLeft={"/sepco_logo.png"} title={"/sepco_text.png"} logoRight={"/mop.png"} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
