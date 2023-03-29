import Header from "./Header";
import List from "./List";
import Menu from "./Menu";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Menu /> */}
      <List />
      <Footer />
    </>
  );
};

export default Layout;
