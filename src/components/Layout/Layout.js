import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex max-w-[1300px] w-[100%]  mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
