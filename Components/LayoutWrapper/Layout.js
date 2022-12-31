import React from "react";
import FooterDetails from "../Footer/FooterDetails";
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
