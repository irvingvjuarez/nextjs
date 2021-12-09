import React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => (
  <React.Fragment>
    <Navbar />
      {children}
    <footer>Hi, I am the footer</footer>
  </React.Fragment>
)

export default Layout;