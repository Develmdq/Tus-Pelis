import { Header, Footer } from "../static";
import { Outlet } from "react-router-dom";
import styled from "../../style/styled.module.css";

const Layout = () => {
  return (
    <div className={styled.containerLayout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
