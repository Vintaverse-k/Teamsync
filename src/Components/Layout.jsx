import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import "../styles/layout.css";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme; // full page theme
  }, [theme]);

  return (
    <div className="app">
      <Sidebar theme={theme} setTheme={setTheme} />
      <div className="main">
        <Topbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
