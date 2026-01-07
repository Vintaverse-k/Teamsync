import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../styles/layout.css";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <Sidebar
        theme={theme}
        setTheme={setTheme}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <div className="main">
        <Topbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
