import React, { Children } from "react";
import FooterDetails from "../Footer/Footer";
import NavBar from "../Nav/NavBar";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <FooterDetails />
    </>
  );
}

export default Layout;
