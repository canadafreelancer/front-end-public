import React, { Children } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
