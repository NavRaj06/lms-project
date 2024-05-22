import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Layout;
