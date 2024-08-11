import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
